import { useContext } from "react";
import { CartContext } from "../utils";
import Nothing from "./Nothing";
import WishItem from "./WishItem";

const WishItems = () => {
  //const cart = getStorage("w");
  //console.log(cart);
  const { wish } = useContext(CartContext);
  //console.log(arr, cart);
  return (
    <div>
      <div className="flex justify-between gap-4 my-8 items-center">
        <h2 className="mr-auto font-bold text-base md:text-xl lg:text-3xl">
          Wishlist
        </h2>
      </div>
      <div>
        {wish.length ? (
          wish.map((item, index) => (
            <WishItem key={index} wishItem={item}>
              {item.product_id}
            </WishItem>
          ))
        ) : (
          <Nothing title={"wish"}></Nothing>
        )}
      </div>
    </div>
  );
};

export default WishItems;
