import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, product_title, price, product_id } = product || {};
  return (
    <div className="card shadow-xl p-4 border-2">
      <figure className=" h-[300px] p-4 rounded-lg border-2">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl object-contain w-full h-full"
        />
      </figure>
      <div className="card-body items-center text-center gap-4">
        <h2 className="card-title font-semibold">{product_title}</h2>
        <p className="font-bold">${price}</p>
        <div className="card-actions">
          <Link to={`/product/${product_id}`}>
            <button className="btn btn-primary bg-[#9538E2] text-white hover:bg-[#731fb8]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
