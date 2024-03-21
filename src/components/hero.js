import React from "react";
import NavbarSection from "./navbar";

const Hero = () => {
  return (
    <section className="md:h-screen h-auto bg-secondary pb-4">
      <NavbarSection />
      <div className="flex items-center justify-between sm:px-20 px-4 md:h-screen h-[70vh]">
        <div className="md:w-1/2 w-full space-y-4">
          <h1 className="md:text-5xl text-3xl text-primary font-bold">
            Your Experts in Heart Health Nutrition.
          </h1>
          <p className="">
            Join us on a journey to explore the profound connection between
            mindful eating habits and the promotion of heart health.
          </p>
          <a href="#about">
            <button class="relative rounded-tr-3xl mt-4 rounded-bl-3xl text-sm h-[50px] w-40 overflow-hidden border border-primary bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-primary hover:before:w-2/4 hover:before:bg-primary hover:after:w-2/4 hover:after:bg-primary">
              <span class="relative z-10">Learn More</span>
            </button>
          </a>
        </div>
        <div className="w-1/2 md:block hidden">
          <div className="relative">
            <img
              className="h-[80vh] w-96 mx-auto object-cover rounded-xl"
              src="/hero.jpg"
              alt=""
            />
            <div className="absolute bg-primary bottom-8 right-78 p-4 rounded-xl space-y-2 w-56">
              <q className="text-sm text-white">
                Your Experts in Heart Health Nutrition.
              </q>
              <div className="block text-white">
                <span className="text-xs">Carol Peters</span>
                <span className="text-xs block">Founder ABC Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
