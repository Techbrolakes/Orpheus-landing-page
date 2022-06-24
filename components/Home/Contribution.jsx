import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Contribution() {
  return (
    <div className="container space-y-12" id="contribution">
      <article className="flex justify-center lg:justify-start gap-8 items-center uppercase text-xl md:text-4xl font-bold">
        <h1 className="lin">Contribution</h1>
        <img src="/line.png" alt="line" className="inline" />
        <p className="text-sm md:text-xl font-light opacity-75">VIEW MORE</p>
      </article>

      <main className="bg-[#E0E0E0] dark:bg-[#121416] block md:grid grid-cols-2 gap-8 items-center shadow-lg rounded-sm">
        <div>
          <img src="/pic.png" alt="picture" className="h-fit" />
        </div>
        <div className="text-center px-4 space-y-4 py-4">
          <h1 className="lin d3 uppercase font-bold">3D Greek Statue Pack</h1>
          <p className="text-md md:text-lg lg:text-4xl tracking-widest uppercase font-light opacity-75">
            Over 200 Greek style sculpture
          </p>
          <button className="btn-fill font-medium rounded-md shadow-lg">
            <span>
              <FiDownload className="inline mr-2" />
            </span>
            Download
          </button>
        </div>
      </main>

      <main className="bg-gradient-to-r from-primary to-secondary dark:bg-gradient-to-r dark:from-tertiary dark:to-tertiary block md:grid grid-cols-2 gap-8 items-center">
        <div className="text-center px-4 space-y-4 py-4">
          <h1 className="lin d3 uppercase font-bold">Greek Statue Avatars</h1>
          <p className="text-md md:text-lg lg:text-4xl tracking-widest uppercase font-light opacity-75">
            +500 Greek style User Avatars
          </p>
          <button className="btn-fill font-medium rounded-md shadow-lg">
            <span>
              <FiDownload className="inline mr-2" />
            </span>
            Download
          </button>
        </div>
        <div>
          <img
            src="/pic2.png"
            alt="picture"
            className="hidden dark:inline-block w-fit"
          />
          <img
            src="/light-pic2.png"
            alt="picture"
            className="dark:hidden w-fit"
          />
        </div>
      </main>
    </div>
  );
}
