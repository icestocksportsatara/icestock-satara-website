import React from "react";
import { siteInfo, media } from "../mock";

const InsideIFI = () => {
  return (
    <section id="about" className="relative bg-[#eaf4fb] py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.7) 0px, transparent 300px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.6) 0px, transparent 250px)",
        }}
      />

      <div className="relative mb-10">
        <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-[#b9d8ea]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] bg-[#eaf4fb] pr-8">
            About ISSA Satara
          </h2>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#2a4a62] text-[17px] md:text-[18px] leading-[1.75] mb-6 max-w-[580px]">
            The Icestock Sport Association of Satara, founded in {siteInfo.foundedYear},
            is dedicated to developing ice stock sport across the Satara district of
            Maharashtra. We organise district tournaments, training camps and
            youth-development programmes across all five official disciplines:
            Team Game, Team Target, Team Distance, Individual Target and
            Individual Distance.
          </p>
          <p className="text-[#2a4a62] text-[17px] md:text-[18px] leading-[1.75] mb-8 max-w-[580px]">
            Under the leadership of our President, {siteInfo.president}, our
            mission is to nurture home-grown talent and put Satara on the national
            and international icestock map.
          </p>
          <a
            href="#events"
            className="inline-flex items-center gap-2 border-2 border-[#2e8bc0] text-[#2e8bc0] hover:bg-[#2e8bc0] hover:text-white px-6 py-3 rounded-full text-[15px] font-medium transition-colors"
          >
            View upcoming events
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(20,58,85,0.15)] bg-[#143a55] aspect-[4/5] md:aspect-square max-h-[560px] w-full">
          <img
            src={media.teamGroup}
            alt="Team ISSA Satara"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default InsideIFI;
