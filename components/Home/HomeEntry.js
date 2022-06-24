import React, { useState } from "react";
import Contribution from "./Contribution";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Nft from "./Nft";
import { NavContext } from "../../contexts/NavContext";

export default function HomeEntry() {
  const [nav, setNav] = useState(false);
  return (
    <NavContext.Provider value={{ nav, setNav }}>
      <section className="space-y-28">
        <div className="dark:bg-[url('/Background.png')] bg-[url('/LB.png')]  bg no-repeat bg-cover space-y-12 lg:space-y-28">
          <Navbar />
          {nav ? null : <Hero />}
        </div>

        {nav ? null : (
          <div className="space-y-28">
            <Nft />
            <Contribution />
            <Footer />
          </div>
        )}
      </section>
    </NavContext.Provider>
  );
}
