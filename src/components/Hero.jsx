import React from "react";
import { media } from "../mock";

const Hero = () => {
  return (
    <section id="home" className="relative pt-[72px] bg-white">
      <div className="relative w-full h-[78vh] min-h-[560px] max-h-[820px] overflow-hidden">
        <img
          src={media.hero}
          alt="Icestock Sport Satara"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] w-full mx-auto px-5 lg:px-10 relative">
            <div className="relative inline-block">
              <div className="absolute -left-[180px] top-8 w-[180px] h-[60px] bg-[#2e8bc0] hidden md:block" />
              <h1 className="relative text-white font-bold leading-[1.05] tracking-tight text-[40px] md:text-[66px] lg:text-[80px] max-w-[960px] drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
                Welcome to <br />
                Icestock Sport <br />
                Association <br />
                of Satara
              </h1>
              <p className="relative mt-6 text-white/95 text-[17px] md:text-[20px] font-medium max-w-[620px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                Precision, Power, and Passion &mdash; Satara Ice Stock Arena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
