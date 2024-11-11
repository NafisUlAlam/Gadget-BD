import PropTypes from "prop-types";
import { useContext } from "react";

import { MdDeleteForever } from "react-icons/md";
import { CartContext } from "../utils";

const CartItem = ({ cartItem }) => {
  //console.log(cartItem);
  const { handleRemove } = useContext(CartContext);
  const { product_image, product_title, price, description } = cartItem;
  return (
    <div className="border-2 rounded-lg mb-4 p-4">
      <div className="md:flex items-center gap-4 justify-between">
        <div className="flex justify-center">
          <img src={product_image} alt="" className="h-40 object-cover" />
        </div>
        <div className="text-center md:text-left md:w-[70%] space-y-4 ">
          <h2 className="font-bold">{product_title}</h2>
          <p>{description}</p>
          <p className="font-bold">Price: ${price}</p>
        </div>
        <div className="relative left-[50%] translate-x-[-50%] md:translate-x-0 mt-4 md:mt-0 md:static px-4 py-2 md:border-2 md:rounded-full btn hover:bg-slate-100 text-center md:text-left">
          <MdDeleteForever
            color="red"
            size={24}
            onClick={() => handleRemove("c", cartItem)}
          ></MdDeleteForever>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default CartItem;
