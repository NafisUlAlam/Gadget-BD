import PropTypes from "prop-types";

const Nothing = ({ title }) => {
  const str = title;
  //console.log(str, title);
  let src, heading, subheading;
  if (str === "cart") {
    src = "https://i.ibb.co.com/k411C6f/istockphoto-1206806317-612x612.jpg";
    heading = "Oops, Your cart is Empty!!!";
    subheading = "Please add some products to your cart.";
  } else if (str === "wish") {
    src =
      "https://i.ibb.co.com/wZHk0jJ/vector-illustration-wishlist-inscription-birthday-party-brush-lettering-modern-calligraphy-desirable.jpg";
    heading = "Your wishlist is Empty!!!";
    subheading = "Please add some Products to your wishlist.";
  } else if (str === "stats") {
    src =
      "https://i.ibb.co.com/wZHk0jJ/vector-illustration-wishlist-inscription-birthday-party-brush-lettering-modern-calligraphy-desirable.jpg";
    heading = "We are working on the stat page!!!";
    subheading = "Please wait patiently...";
  } else {
    src = "https://i.ibb.co.com/WD1gqk4/stock-out-icon-256x256-2ltyhmsg.png";
    heading = `Sorry we are currently Stocked out on ${str}`;
    subheading = "Please wait until we stock the products";
  }
  return (
    <div className="flex justify-center items-center mb-8 border-2 rounded-lg p-8 shadow-lg">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={src} alt="" className="h-40" />
        </div>
        <h2 className="font-extrabold md:text-xl lg:text-2xl my-5">
          {heading}
        </h2>
        <p className=" md:text-xl lg:text-2xl text-black/50">{subheading}</p>
      </div>
    </div>
  );
};

Nothing.propTypes = {
  title: PropTypes.string,
};

export default Nothing;
