import React from "react";

export default function Footer() {
  return (
    <div className="container py-2" id="contact">
      <section className="text-center space-y-4">
        <h1 className="lin d3 uppercase font-bold">Let&rsquo;s Connect</h1>
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl  tracking-wide uppercase font-light opacity-90">
          Get in touch for opportunities or just to say hi! 👋
        </p>
        <div className="flex justify-center">
          <a href="https://www.linkedin.com/in/lekandar/">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </section>
    </div>
  );
}
