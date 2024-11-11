import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils";
const Navbar = () => {
  const { pathname } = useLocation();
  //console.log(pathname);
  const { cart, wish } = useContext(CartContext);
  const [isTrue, setIstrue] = useState(true);

  useEffect(() => {
    if (pathname === "/" || pathname.split("/")[1] === "category")
      setIstrue(true);
    else setIstrue(false);
  }, [pathname]);
  return (
    <div
      className={`navbar sticky top-0 z-10 ${
        isTrue ? "bg-[#9538E2] text-white" : "bg-white text-black"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#9538E2] border-2 text-white rounded-box z-[1] mt-3  p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>Latest News</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="font-bold text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/news"}>Latest News</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="relative">
          <Link to="/dashboard/cart">
            <div
              className={`${
                isTrue ? "bg-white" : "bg-slate-200"
              } btn w-12 h-12 rounded-full  flex items-center justify-center `}
            >
              {/* btn w-12 h-12 rounded-full bg-white flex items-center justify-center */}
              <IoCart size={16} color="black" />
            </div>
          </Link>
        </div>

        <Link to="/dashboard/wishlist">
          <div
            className={`${
              isTrue ? "bg-white" : "bg-slate-200"
            } btn w-12 h-12 rounded-full  flex items-center justify-center `}
          >
            <FaHeart size={16} color="black" />
          </div>
        </Link>
      </div>

      <div
        className={`${
          isTrue ? "text-white" : "text-black"
        } font-bold  relative mt-[-50px] ml-[-70px] `}
      >
        {cart.length}
      </div>

      <div
        className={`${
          isTrue ? "text-white" : "text-black"
        } font-bold  relative mt-[-50px] ml-[55px] `}
      >
        {wish.length}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
