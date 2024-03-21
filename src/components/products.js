import React, { useState, useEffect } from "react";

// OWL CAROUSEL
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { products } from "@/assets/data";


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Products = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const testimonials = {
    loop: true,
    margin: 0,
    nav: false,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
        center: true,
        dots: false,
        nav: false,
      },
      480: {
        items: 1,
        center: false,
        dots: false,
      },
      769: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section id="products" className="sm:px-20 px-2 sm:py-16 py-8 ">
        <h1 className="text-center text-3xl">Our Products</h1>
        <p className="text-center"> Explore our catalogue of wellness products</p>
        <div className="border-b-4 border-black w-36 mx-auto mt-2"></div>
        <div className="my-12">
          <OwlCarousel {...testimonials}>
            {products.map((item, index) => (
              <div key={index} className="bg-primary sm:px-12 px-2 space-y-4 py-2 sm:py-4 slider-card h-[30] mt-12">
                <img
                  style={{ maxWidth: "80px", height: "80px" }}
                  className="sm:-mt-8 -mt-4 mx-auto rounded-full object-cover"
                  src={item.img}
                  alt=""
                />
                <p className={`text-center text-sm`}>{item.name}</p>
                <p className="text-center pb-4 text-xs font-thin">
                  {item.desc}
                </p>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Products;
