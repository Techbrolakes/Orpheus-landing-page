import React from "react";
import Contribution from "./Contribution";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Nft from "./Nft";

export default function HomeEntry() {
  return (
    <section className="space-y-28">
      <div className="bg-[url('/Background.png')]  bg no-repeat bg-cover space-y-28">
        <Navbar />
        <Hero />
      </div>

      <Nft />
      <Contribution />
      <Footer />
    </section>
  );
}
