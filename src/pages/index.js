import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Team from "@/components/team";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Products />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
