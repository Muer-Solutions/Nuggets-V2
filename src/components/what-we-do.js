import { what_we_do } from "@/assets/data";
import React from "react";

const WhatWeDo = () => {
  return (
    <section id="wedo" className="sm:px-20 px-4 py-8 bg-secondary">
      <div className="space-y-2 text-center my-4">
        <h1 className="text-3xl">What We Do</h1>
        <p className="">Projects and Features</p>
        <div className="border-b-4 border-black w-36 mx-auto mt-2"></div>
      </div>

      <section className="grid md:grid-cols-2 grid-cols-1 gap-2 md:w-11/12 w-full mx-auto ">
        {what_we_do.map((item, index) => (
          <div className="md:flex gap-4 bg-white rounded p-4" key={index}>
            <div className="md:w-5/12">
              <img className="rounded-xl h-38 w-full object-cover" src={item.img} alt="" />
            </div>
            <div className="md:w-9/12">
              <h1 className="text-xl text-primary">{item.title}</h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default WhatWeDo;
