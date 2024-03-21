import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./drawer";
import Link from "next/link";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className="flex items-center justify-between sm:px-20 px-4 sticky top-0 z-50"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#204B1B" : "transparent",
        }}
      >
        <div className="py-4">
          <Link href="/" className="">
            <h1
              className={`${
                navBackground
                  ? "text-white font-bold"
                  : "text-primary font-bold"
              }`}
            >
              Healthy Nuggets
            </h1>
          </Link>
        </div>
        <nav className="md:block hidden py-4">
          <ul className="flex items-center gap-8">
            <li className="">
              <a href="#home" className={`${navBackground ? "text-white" : "text-primary"}`}>
                Home
              </a>
            </li>
            <li className="">
              <a href="#about" className={`${navBackground ? "text-white" : "text-primary"}`}>
                About
              </a>
            </li>
            <li className="">
              <a href="#wedo" className={`${navBackground ? "text-white" : "text-primary"}`}>
                What We Do
              </a>
            </li>
            <li className="">
              <a href="#products" className={`${navBackground ? "text-white" : "text-primary"}`}>
                Products
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <a href="#contact">
            <button className="bg-primary text-white px-4 py-2 rounded-3xl text-sm shadow-2xl">
              Contact Us
            </button>
          </a>
        </div>
        <div className="md:hidden block py-4">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default NavbarSection;
