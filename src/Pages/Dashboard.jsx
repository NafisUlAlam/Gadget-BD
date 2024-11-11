import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import {} from "../utils";

const Dashboard = () => {
  //const { setCart } = useOutletContext();
  const { pathname } = useLocation();
  //const params = useContext(CartContext);
  //console.log(params);
  //console.log(setCart);
  const [isTrue, setIsTrue] = useState(true);
  useEffect(() => {
    if (pathname === "/dashboard" || pathname === "/dashboard/cart")
      setIsTrue(true);
    else setIsTrue(false);
  }, [pathname]);

  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadgets BD</title>
      </Helmet>
      <div className="bg-[#9538E2] pb-4 lg:pt-12 rounded-xl">
        <h2 className="text-center text-white font-bold text-lg md:text-xl lg:text-3xl mb-4">
          Dashboard
        </h2>
        <p className="text-center text-white font-normal text-xs md:text-base lg:px-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-6 md:mt-12 flex justify-center gap-4">
          <NavLink
            to="cart"
            className={isTrue ? "bg-white rounded-full" : "text-white"}
          >
            <button className="px-10 py-2 font-bold rounded-full hover:bg-white hover:text-black text-xs md:text-base">
              Cart
            </button>
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              isActive ? "bg-white rounded-full" : "text-white"
            }
          >
            <button className="px-10 py-2 font-bold rounded-full hover:bg-white hover:text-black text-xs md:text-base">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
