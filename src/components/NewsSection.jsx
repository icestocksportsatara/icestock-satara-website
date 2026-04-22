import React from "react";
import { newsItems } from "../mock";

const IceStockIcon = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 4 L20 24" />
    <ellipse cx="20" cy="29" rx="11" ry="3.5" />
    <path d="M9 29 L9 32 Q9 34 20 34 Q31 34 31 32 L31 29" />
  </svg>
);

const NewsSection = () => {
  const featured = newsItems.find((n) => n.featured);
  const others = newsItems.filter((n) => !n.featured);

  return (
    <section id="news" className="bg-white py-20">
      <div className="relative mb-12">
        <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-[#cfe4f2]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] bg-white pr-8">
            News
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-0 pt-4">
          {others.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex items-start gap-5 py-6 border-b border-[#d5e6f0] group hover:border-[#2e8bc0] transition-colors"
            >
              <IceStockIcon className="w-10 h-10 text-[#143a55] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-[#143a55] text-[20px] md:text-[22px] font-semibold leading-snug group-hover:text-[#2e8bc0] transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}

          <div className="pt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#2e8bc0] hover:bg-[#236b95] text-white px-6 py-3 rounded-full text-[15px] font-medium transition-colors"
            >
              All news
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {featured && (
          <a href="#" className="relative block group">
            <div className="relative rounded-md overflow-hidden shadow-[0_10px_40px_rgba(20,58,85,0.15)]">
              <img
                src={featured.image}
                alt={featured.title}
                referrerPolicy="no-referrer"
                className="w-full h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="relative -mt-20 ml-4 md:ml-10 bg-white rounded-md shadow-[0_10px_40px_rgba(20,58,85,0.12)] p-6 md:p-8 max-w-[86%]">
              <p className="text-[#6b8294] text-sm mb-3">{featured.date}</p>
              <div className="flex items-start gap-4">
                <IceStockIcon className="w-9 h-9 text-[#143a55] flex-shrink-0 mt-1" />
                <h3 className="text-[#143a55] text-[22px] md:text-[26px] font-semibold leading-snug pb-3 border-b border-[#d5e6f0] group-hover:text-[#2e8bc0] transition-colors">
                  {featured.title}
                </h3>
              </div>
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
