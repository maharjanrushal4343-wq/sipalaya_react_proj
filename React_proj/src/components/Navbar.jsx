import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const order = useSelector((state) => state.order.orderList);

  const iconClass =
    "text-3xl h-8 w-8 text-gray-500 hover:text-gray-600 cursor-pointer";

  const linkClass = ({ isActive }) =>
    `block md:inline-block py-2 px-3 text-[14px] font-semibold transition-colors duration-200 ${
      isActive ? "text-amber-600" : "text-[#6B788E] hover:text-amber-600"
    }`;

  return (
    <header className="bg-[#FFFFFF] border-b border-[#00000026] shadow sticky z-50 top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        <div
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
          className="flex items-center gap-2 cursor-pointer py-4"
        >
          <img className="w-8 h-8" src="/logo.png" alt="logo" />
          <h5 className="font-semibold text-[#0C6967] text-[25px]">momos</h5>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none text-3xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <nav className="hidden md:flex gap-2 items-center">
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/menu" className={linkClass}>
            Our Menu
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Our Services
          </NavLink>
          <NavLink to="/allergy-advice" className={linkClass}>
            Allergy Advice
          </NavLink>
        </nav>

        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-4 items-center">
            <FaFacebook className={iconClass} />
            <AiFillTikTok className={iconClass} />
            <FaInstagramSquare className={iconClass} />
          </div>
          <NavLink className="px-5.5 py-3 rounded-full text-white bg-[#D95103] text-[14px] flex items-center hover:bg-amber-700 cursor-pointer transition-colors">
            Contact us
          </NavLink>
          <NavLink to={"/cart"} className={"relative"}>
            <IoCartOutline className="h-7 w-7 text-black hover:text-amber-700 cursor-pointer transition-colors" />
            {order.length > 0 && (
              <span className="px-2 py-1 text-[8px] bg-red-600 text-white rounded-full absolute -top-2 -right-2">
                {order.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden border-t border-gray-100 bg-white`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 shadow-inner">
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/menu"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/allergy-advice"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Allergy Advice
          </NavLink>

          <hr className="border-gray-200 my-3" />

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex gap-6 items-center justify-start pl-3">
              <FaFacebook className={iconClass} />
              <AiFillTikTok className={iconClass} />
              <FaInstagramSquare className={iconClass} />
              <NavLink to={"/cart"} className={"relative"}>
                <IoCartOutline className="h-7 w-7 text-black hover:text-amber-700 cursor-pointer transition-colors" />
                {order.length > 0 && (
                  <span className="px-2 py-1 text-[8px] bg-red-600 text-white rounded-full absolute -top-2 -right-2">
                    {order.length}
                  </span>
                )}
              </NavLink>
            </div>
            <NavLink className="w-full justify-center px-5.5 py-3 rounded-full text-white bg-[#D95103] text-[14px] flex items-center hover:bg-amber-700 cursor-pointer transition-colors">
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
