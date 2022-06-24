import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Contribution() {
  return (
    <div className="container space-y-12">
      <article className="flex justify-start gap-8 items-center uppercase text-4xl font-bold">
        <h1 className="lin">Contribution</h1>
        <img src="/line.png" alt="line" className="inline" />
        <p className="text-xl font-light opacity-75">VIEW MORE</p>
      </article>

      <main className="bg-[#E0E0E0] dark:bg-[#121416] grid grid-cols-2 gap-8 items-center">
        <div>
          <img src="/pic.png" alt="picture" />
        </div>
        <div className="text-center px-4 space-y-4">
          <h1 className="lin d3 uppercase font-bold">3D Greek Statue Pack</h1>
          <p className="text-4xl tracking-widest uppercase font-light opacity-75">
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

      <main className="bg-gradient-to-r from-primary to-secondary dark:bg-gradient-to-r dark:from-tertiary dark:to-tertiary grid grid-cols-2 gap-8 items-center">
        <div className="text-center px-4 space-y-4">
          <h1 className="lin text-[40px] uppercase font-bold">
            Greek Statue Avatars
          </h1>
          <p className="text-4xl tracking-widest uppercase font-light opacity-75">
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
