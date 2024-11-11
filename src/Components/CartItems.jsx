import { useContext, useEffect, useState } from "react";
import { CartContext, delStorage } from "../utils";
import Nothing from "./Nothing";
import CartItem from "./CartItem";
import Modal from "./Modal";

const CartItems = () => {
  //const { setCart } = useOutletContext();
  //console.log(setCart);

  const { cart, setCart, totalPrice, setTotalPrice } = useContext(CartContext);

  //total price state manage
  // const [price, setPrice] = useState(0);
  // useEffect(() => {
  //   let total = 0;
  //   for (let item of cart) total += item.price;
  //   total = total.toFixed(2);
  //   setPrice(total);
  // }, [cart]);

  const handleSort = () => {
    const newArr = [...cart].sort((a, b) => b.price - a.price);
    setCart(newArr);
  };

  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (cart.length === 0) setIsDisabled(true);
    else setIsDisabled(false);
  }, [cart.length]);

  const handlePurchase = () => {
    //console.log("button clicked");
    document.getElementById("my_modal_5").showModal();
    delStorage("c");
    setCart([]);

    setTotalPrice(0);
    setIsDisabled(true);
  };
  return (
    <div>
      <Modal></Modal>
      <div className="flex justify-between gap-4 my-8 items-center">
        <h2 className="mr-auto font-bold text-base md:text-xl lg:text-3xl">
          Cart
        </h2>
        <p className="font-bold">Total Cost : {totalPrice}</p>
        <button
          className="btn btn-outline hover:bg-[#731fb8] flex-shrink"
          onClick={() => handleSort()}
        >
          Sort By Price
        </button>
        <button
          disabled={isDisabled}
          className="btn btn-outline hover:bg-[#731fb8] flex-shrink"
          onClick={() => {
            handlePurchase();
          }}
        >
          Purchase
        </button>
      </div>
      <div>
        {cart.length ? (
          cart.map((item, index) => (
            <CartItem key={index} cartItem={item}>
              {item.product_id}
            </CartItem>
          ))
        ) : (
          <Nothing title={"cart"}></Nothing>
        )}
      </div>
    </div>
  );
};

export default CartItems;
