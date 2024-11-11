import { useLoaderData, useParams } from "react-router-dom";
import Rating from "./../Components/Rating";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  //console.log(typeof productId);
  //const { handleAdd } = useOutletContext();
  const { wish, handleAdd } = useContext(CartContext);
  //console.log(cart, wish);

  const [prod, setProd] = useState({});
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    const p = data.find((product) => product.product_id === productId);
    setProd(p);
    //const array = getStorage("w");
    const isExist = wish.find((product) => product.product_id === p.product_id);
    if (isExist) setIsWished(true);
  }, [data, productId, wish]);
  // const p = data.find((product) => product.product_id === productId);

  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    rating,
    specification,
  } = prod;

  //this is just for disabling the wishlist button once clicked
  const handleClick = () => {
    setIsWished(true);
  };
  return (
    <div className="relative">
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div className="bg-[#9538E2] pb-40 md:pt-12 rounded-xl ">
        <h2 className="text-center text-white font-bold text-lg md:text-xl lg:text-3xl mb-4">
          Product Details
        </h2>
        <p className="text-center text-white font-normal text-xs md:text-base lg:px-20">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="card md:card-side bg-base-100 shadow-xl gap-4 md:w-[90%] relative mt-[-120px] md:left-[5%] mb-12">
        <figure className="md:w-1/2  md:h-auto">
          <img
            src={product_image}
            alt={product_title}
            className="object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-lg  lg:text-2xl">{product_title}</h2>
          <h3 className="font-bold text-base  lg:text-xl">Price : ${price}</h3>
          <h3
            className={`text-xs ${
              availability ? "text-green-500" : "text-red-500"
            }`}
          >
            {availability ? "In stock" : "Out of stock"}
          </h3>
          <h3>{description}</h3>
          <h3 className="font-bold text-base  lg:text-xl">Specification:</h3>
          <ol>
            {specification &&
              specification.map((str, id) => (
                <li
                  key={id}
                  className="text-[14px] lg:text-lg text-[#09080F]/60"
                >
                  {id + 1}. {str}
                </li>
              ))}
          </ol>

          <h3 className="font-bold text-base  lg:text-xl">Rating </h3>
          <div className="flex gap-12 items-center">
            <div className="font-bold text-base lg:text-xl">
              <Rating rating={rating}></Rating>
            </div>
            <div className="w-max py-1 px-4 rounded-full bg-slate-200">
              <h2 className="font-bold text-sm ">{rating}</h2>
            </div>
          </div>

          <div className="flex items-center  gap-12 mt-4">
            <button
              disabled={!availability}
              onClick={() => handleAdd("c", prod)}
              className="flex items-center gap-2 bg-[#9538E2] hover:bg-[#731fb8] text-white px-4 py-2 rounded-full btn"
            >
              Add to cart <IoCart size={14} color="white" />
            </button>
            <button
              className="btn btn-outline px-4 py-2 rounded-full  w-auto h-auto min-h-0"
              onClick={() => {
                handleAdd("w", prod);
                handleClick();
              }}
              disabled={isWished}
            >
              <FaHeart size={16} color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
