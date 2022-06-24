import React from "react";

export default function Nft() {
  return (
    <div className="container space-y-12">
      <article className="flex justify-end gap-8 items-center uppercase text-4xl font-bold">
        <h1 className="lin">Recent Nft</h1>
        <img src="/line.png" alt="line" className="inline" />
        <p className="text-xl font-light opacity-75">VIEW MORE</p>
      </article>
      <section className="grid grid-cols-3 gap-12 cursor-pointer">
        <div>
          <img src="/Frame4.png" alt="NFT" />
        </div>
        <div>
          <img src="/Frame5.png" alt="NFT" />
        </div>
        <div>
          <img src="/Frame6.png" alt="NFT" />
        </div>
      </section>
    </div>
  );
}
