import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Hero() {
  return (
    <div className="container">
      <section className="grid grid-cols-3  gap-4">
        <div className="col-span-2 space-y-2">
          <h1 className="cinzel">
            Yet the story of <span className="">Orpheus</span>
          </h1>
          <p className="text-p tracking-wide dark:text-[#eff3fb] text-black font-medium">
            Product & Graphic Designer, with experience in delivering end-to-end
            UX/UI design for software products.
          </p>
          <button className="btn-outline shadow-sm">
            WORK
            <span>
              <MdKeyboardArrowDown className="text-2xl inline linear" />
            </span>
          </button>
          <button className="ml-4 btn-fill rounded-md shadow-lg">
            Free Stuff
          </button>
        </div>

        <div>
          <img
            src="full-hero.png"
            alt="image"
            className="hidden dark:inline-block w-fit"
          />
          <img src="light-hero.png" alt="image" className="dark:hidden w-fit" />
        </div>
      </section>
    </div>
  );
}
