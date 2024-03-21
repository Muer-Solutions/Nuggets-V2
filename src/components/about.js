import React from "react";

const About = () => {
  return (
    <section id="about" className="h-screen px-20 py-10 flex items-center gap-4 justify-between">
      <div className="w-1/2 space-y-4">
        <h1 className="text-4xl">
          Mindful Eating for Healthy Hearts.
        </h1>
        <p className="">
          Cultivate a harmonious relationship between nutrition, well-being and
          heart health. Uncover the transformative impact that a conscious and
          intentional approach to meals can have on the vitality of our hearts.
        </p>
        <p className="">
          Learn about all things concerning cardiovascular nutrition through our
          blog posts, We also provide{" "}
          <span className="font-bold text-primary">Nutrition Consultation</span> concerning{" "}
          <span className="font-bold text-primary">heart health</span>
          and offer a wide variety of health and wellness products from our{" "}
          <span className="font-bold text-primary">wellness catalogue</span> with{" "}
          <span className="font-bold text-primary">friendly delivery prices</span>{" "}
          countrywide.
        </p>
        <p className="">
          All of our products are <span className="font-bold text-primary">certified</span>{" "}
          and <span className="font-bold text-primary">ethically produced.</span>
        </p>
      </div>
      <div>
        <img className="rounded" src="/nugg1.webp" alt="" />
      </div>
    </section>
  );
};

export default About;
