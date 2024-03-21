import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-primary sm:px-20 px-4 py-10 text-white">
      <section className="md:flex gap-4 justify-between items-center md:space-y-0 space-y-8">
        <div className="space-y-4">
          <h1 className="text-center font-bold">Healthy Nuggets</h1>
        </div>
        <div className="space-y-4 mx-auto">
          <h1 className="text-xl">About</h1>
          <p className="text-sm font-thin">
            Your Experts in Heart Health Nutrition
          </p>
          <div className="flex items-center gap-4">
            <FaLocationDot className="text-white" />
            <p className="text-xs">Banana Road</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-white" />
            <p className="text-xs">+254 716 666 213</p>
          </div>
        </div>
        <div className="space-y-4 mx-auto">
          <h1 className="text-xl">Quick Links</h1>
          <div className="font-thin text-sm space-y-2 grid">
            <a href="#wedo">What We Do</a>
            <a href="#products">Products</a>
            <a href="#team">Team</a>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl">Support</h1>
          <ul className="font-thin text-sm space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Available Products</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Footer;
