import PropTypes from "prop-types";
import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from "../utils";

const WishItem = ({ wishItem }) => {
  const { handleRemove, handleAdd } = useContext(CartContext);
  const { product_image, product_title, price, description } = wishItem;
  return (
    <div className="border-2 rounded-lg mb-4 p-4">
      <div className="md:flex items-center gap-4 justify-between">
        <div className="mb-4 flex justify-center">
          <img src={product_image} alt="" className="md:h-40 object-cover" />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h2 className="font-bold  md:w-[70%]">{product_title}</h2>
          <p>{description}</p>
          <p className="font-bold text-center md:text-left">Price: ${price}</p>
          <div className="text-center md:text-left">
            <button
              className="btn bg-purple-700 text-white font-bold py-3 px-5 rounded-full h-auto min-h-0"
              onClick={() => handleAdd("c", wishItem, "hello")}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="relative left-[50%] translate-x-[-50%] md:translate-x-0 mt-4 md:mt-0 md:static px-4 py-2 md:border-2 md:rounded-full btn hover:bg-slate-100 text-center md:text-left">
          <MdDeleteForever
            color="red"
            size={24}
            onClick={() => handleRemove("w", wishItem)}
          ></MdDeleteForever>
        </div>
      </div>
    </div>
  );
};
WishItem.propTypes = {
  wishItem: PropTypes.object,
};

export default WishItem;
