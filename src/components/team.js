import { team } from "@/assets/data";
import React from "react";

const Team = () => {
  return (
    <section className="sm:px-20 px-4 py-10 space-y-4 md:h-[80vh] h-auto bg-secondary">
      <div className="text-center">
        <h1 className="text-3xl">Our Team</h1>
        <div className="border-b-4 border-black w-28 mx-auto mt-2"></div>
      </div>
      <section className="md:flex items-center gap-4 justify-between md:space-y-0 space-y-4">
        {team.map((item, index) => (
          <div className="p-1 mx-auto" key={index}>
            <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
              <div className="bg-gray rounded">
                <img
                  className="duration-700 h-60 object-cover transition-transform"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="bg-primary font-semibold py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-2 text-center translate-y-[85%] group-hover:translate-y-[0%] transition-all">
                <p className="text-white font-thin text-sm mb-4">
                  {item.name}
                </p>
                <div className="space-y-4">
                  <p className="text-white font-thin">{item.field}</p>
                  <p className="text-xs text-white font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, debitis! Nesciunt temporibus recusandae iste deserunt
                    tempore voluptate, illum cum magnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Team;
