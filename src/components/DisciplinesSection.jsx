import React, { useState } from "react";
import { disciplines } from "../mock";
import { ArrowRight, ChevronDown, Target, Users, Zap, User, TrendingUp } from "lucide-react";

const iconFor = (key) => {
  const map = {
    "team-game": Users,
    "team-target": Target,
    "team-distance": TrendingUp,
    "individual-target": Target,
    "individual-distance": Zap,
  };
  const Icon = map[key] || User;
  return Icon;
};

const DisciplineCard = ({ d, isOpen, onToggle }) => {
  const Icon = iconFor(d.key);
  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{ backgroundColor: d.bg }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-7 flex items-start gap-5 group"
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
          style={{ backgroundColor: d.accent, color: "#fff" }}
        >
          <Icon className="w-7 h-7" strokeWidth={2.2} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#143a55] leading-tight">
              {d.name}
            </h3>
            <span
              className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: d.accent }}
            >
              {d.short}
            </span>
          </div>
          <p className="text-[#385365] text-[14.5px] leading-relaxed">
            {d.summary}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#143a55] flex-shrink-0 mt-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-7 pb-7 pt-2 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4
                className="text-[13px] font-bold uppercase tracking-wider mb-3"
                style={{ color: d.accent }}
              >
                Rules
              </h4>
              <ul className="space-y-2 text-[14px] text-[#2a4a62] leading-relaxed">
                {d.rules.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: d.accent }} className="font-bold">
                      {i + 1}.
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4
                className="text-[13px] font-bold uppercase tracking-wider mb-3"
                style={{ color: d.accent }}
              >
                Points & Scoring
              </h4>
              <p className="text-[14px] text-[#2a4a62] leading-relaxed">
                {d.points}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisciplinesSection = () => {
  const [openKey, setOpenKey] = useState("team-game");

  return (
    <section id="disciplines" className="bg-[#f2f8fc] py-20">
      <div className="relative mb-12">
        <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-[#cfe4f2]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] bg-[#f2f8fc] pr-8">
            Disciplines
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <p className="text-[#385365] text-[16px] md:text-[17px] max-w-[780px] mb-10 leading-relaxed">
          Icestock sport is played across five official disciplines recognized by the
          International Federation (IFI). Tap any card below to view its rules and
          scoring system.
        </p>

        <div className="space-y-4">
          {disciplines.map((d) => (
            <DisciplineCard
              key={d.key}
              d={d}
              isOpen={openKey === d.key}
              onToggle={() => setOpenKey(openKey === d.key ? null : d.key)}
            />
          ))}
        </div>

        <div className="mt-10 text-[13px] text-[#6b8294]">
          Rules & scoring sourced from the International Federation of Icestocksport (IFI).
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
