import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import { Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { addToStorage, getStorage } from "../utils";
import { CartContext } from "../utils";
const MainLayout = () => {
  // setting cart and wishlist from localstorage
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartArr = getStorage("c");
    const wishArr = getStorage("w");
    setCart(cartArr);
    setWish(wishArr);
  }, []);

  const handleAdd = (str, p, from) => {
    if (totalPrice + p.price >= 5000 && str === "c") {
      toast.error("You can't add products worth more than 5000$!!!");
      return;
    }
    if (str === "c" && !p.availability) {
      toast.error("The product is out of stock, can't add it to cart");
      return;
    }
    if (from) {
      handleRemove("w", p);
    }
    addToStorage(str, p);

    //const localStorage = getStorage(str);
    if (str === "c") {
      setCart([...cart, p]);
      setTotalPrice((prev) => prev + p.price);
    }
    if (str === "w") setWish([...wish, p]);
  };

  const handleRemove = (str, p) => {
    //console.log("button cl", str, p);
    let arr, storedArr;
    if (str === "c") {
      arr = [...cart];
      storedArr = getStorage("c");
      setTotalPrice((prev) => prev - p.price);
    } else {
      arr = [...wish];
      storedArr = getStorage("w");
    }

    const index = arr.indexOf(p);
    const index2 = storedArr.indexOf(p);
    arr.splice(index, 1);
    storedArr.splice(index2, 1);
    if (str === "c") {
      setCart(arr);
      localStorage.setItem("cart", JSON.stringify(storedArr));
    } else {
      setWish(arr);
      localStorage.setItem("wishlist", JSON.stringify(storedArr));
    }
  };
  return (
    <div className="container mx-auto w-11/12">
      <ToastContainer />
      <CartContext.Provider
        value={{
          cart,
          setCart,
          wish,
          setWish,
          handleAdd,
          handleRemove,
          totalPrice,
          setTotalPrice,
        }}
      >
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </CartContext.Provider>
      <Footer></Footer>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
