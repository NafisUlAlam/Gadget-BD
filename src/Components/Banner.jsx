import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" bg-[#9538E2]  text-white pt-12 pb-20 lg:pb-40 rounded-b-xl">
      <h2 className="font-bold text-xl md:text-2xl lg:text-5xl text-center mb-12">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h2>
      <p className="font-semibold text-xs md:text-base text-center mb-12 mx-12">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="text-center mb-12">
        <Link to="/dashboard">
          <button className="btn h-auto font-bold bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white  rounded-full px-6 py-3">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
