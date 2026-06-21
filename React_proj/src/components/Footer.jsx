import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 text-[12px] ${
      isActive ? "text-amber-600" : "text-[#6B788E] hover:text-amber-600"
    }`;
  return (
    <footer className="lg:px-30 px-8 py-14 bg-[#eeeeee]">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-10 justify-center">
        <div className="flex flex-col lg:px-30 md:px-10">
          <div className="flex items-center gap-2 cursor-pointer py-4">
            <img className="w-9 h-9" src="/logo.png" alt="logo" />
            <h5 className="font-bold text-[#0C6967] text-[20px]">momos</h5>
          </div>
          <p className="text-[#6B788E] text-[14px]/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            consequatur cum dignissimos nostrum mollitia. Quidem id eos earum
            dolores, necessitatibus dicta non esse vel aliquid quasi dolorem
            quisquam facere accusamus.
          </p>
        </div>
        <div className="flex gap-24 flex-wrap lg:justify-center">
          <div className="flex flex-col gap-1 text-[#6B788E]">
            <h5 className="font-bold text-[#0C6967] text-[18px] py-4">momos</h5>
            <NavLink to={"/about"} className={linkClass}>
              About Us
            </NavLink>
            <NavLink to={"/menu"} className={linkClass}>
              Our Menu
            </NavLink>
            <NavLink to={"/services"} className={linkClass}>
              Our Services
            </NavLink>
            <NavLink to={"contact"} className={linkClass}>
              Contact Us
            </NavLink>
          </div>
          <div className="flex flex-col gap-1 text-[#6B788E]">
            <h5 className="font-bold text-[#0C6967] text-[18px] py-4">
              Legals
            </h5>
            <NavLink to={"/terms"} className={linkClass}>Terms & Conditions</NavLink>
            <NavLink to={"/policy"} className={linkClass}>Privacy Policy</NavLink>
            <NavLink to={"/support"} className={linkClass}> Support </NavLink>
          </div>
          <div className="flex flex-col gap-1 text-[#6B788E] text-[28px]">
            <h5 className="font-bold text-[#0C6967] text-[18px] py-4">
              Follow Us
            </h5>
            <div className="grid grid-cols-3 gap-4">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 text-[#DFE2E6]" />
      <p className="text-center text-[#6B788E] text-[13px]">
        Copyright © 2026 Everest Momo Pvt Ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
