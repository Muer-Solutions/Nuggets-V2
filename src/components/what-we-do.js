import { what_we_do } from "@/assets/data";
import React from "react";

const WhatWeDo = () => {
  return (
    <section id="wedo" className="px-20 py-8 bg-secondary">
      <div className="space-y-2 text-center my-4">
        <h1 className="text-3xl">What We Do</h1>
        <p className="">Projects and Features</p>
      </div>

      <section className="grid grid-cols-2 gap-2 w-11/12 mx-auto ">
        {what_we_do.map((item, index) => (
          <div className="flex gap-4 bg-white rounded p-4" key={index}>
            <div className="w-5/12">
              <img className="rounded-xl h-38 w-full object-cover" src={item.img} alt="" />
            </div>
            <div className="w-9/12">
              <h1 className="text-xl text-primary font-bold">{item.title}</h1>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default WhatWeDo;
