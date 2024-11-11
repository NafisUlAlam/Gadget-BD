import { createContext } from "react";
import { toast } from "react-toastify";

export const getStorage = (str) => {
  let storage;
  if (str === "w") storage = localStorage.getItem("wishlist");
  else storage = localStorage.getItem("cart");

  if (storage) {
    //console.log(storage, str);
    return JSON.parse(storage);
  } else {
    //console.log([], str);
    return [];
  }
};

export const addToStorage = (str, product) => {
  let storage = getStorage(str);
  const isExist = storage.find(
    (item) => item.product_id === product.product_id
  );
  if (str === "w" && isExist) {
    toast.error("item already exists");
    return;
  }
  storage.push(product);
  if (str === "w") localStorage.setItem("wishlist", JSON.stringify(storage));
  else localStorage.setItem("cart", JSON.stringify(storage));
  toast.success(`successfully added to ${str === "w" ? "Wishlist" : "Cart"}!`);
};

export const delStorage = (str) => {
  if (str === "c") localStorage.removeItem("cart");
};

export const CartContext = createContext(getStorage("c"));
export const WishContext = createContext(getStorage("w"));
//console.log(CartContext, WishContext);
