import React from "react";
import { leadership } from "../mock";
import { MapPin, Mail, Phone, Instagram, Quote, Users } from "lucide-react";

const LeaderCard = ({ leader }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(20,58,85,0.08)] hover:shadow-[0_16px_50px_rgba(20,58,85,0.18)] transition-all duration-300 hover:-translate-y-1">
    <div
      className="absolute top-0 left-0 right-0 h-[120px]"
      style={{
        background: `linear-gradient(135deg, ${leader.accent} 0%, #143a55 100%)`,
      }}
    />

    <div className="relative pt-[60px] px-7 pb-7">
      <div className="flex justify-center mb-5">
        <div className="w-[160px] h-[160px] rounded-full overflow-hidden bg-white border-[5px] border-white shadow-lg">
          <img
            src={leader.photo}
            alt={leader.name}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover ${leader.photoPosition || "object-center"}`}
          />
        </div>
      </div>

      <div className="text-center">
        <span
          className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full text-white mb-3"
          style={{ backgroundColor: leader.accent }}
        >
          {leader.title}
        </span>
        <h3 className="text-[22px] md:text-[24px] font-bold text-[#143a55] leading-tight mb-1">
          {leader.name}
        </h3>
        <p className="text-[#385365] text-[14.5px] leading-snug mb-5 min-h-[42px]">
          {leader.org}
        </p>

        <div className="flex items-center justify-center gap-2 pt-5 border-t border-[#e6edf2] text-[13.5px] text-[#385365]">
          <MapPin className="w-4 h-4" style={{ color: leader.accent }} />
          <span>{leader.scope}</span>
        </div>

        {/* PLACEHOLDER: Contact info & Instagram */}
        <div className="mt-5 pt-5 border-t border-dashed border-[#d5e0e8]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6b8294] mb-3">
            Contact &amp; Social
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[Mail, Phone, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-[#f2f8fc] border border-dashed border-[#cfe4f2] flex items-center justify-center text-[#a8bccb]"
                title="Coming soon"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#a8bccb] italic mt-2">
            Coming soon
          </p>
        </div>

        {/* PLACEHOLDER: Quote / Message */}
        <div className="mt-5 pt-5 border-t border-dashed border-[#d5e0e8] text-left">
          <div className="flex items-start gap-2.5">
            <Quote className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: leader.accent }} />
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6b8294] mb-1.5">
                Message from President
              </p>
              <div className="h-[60px] rounded-lg bg-[#f2f8fc] border border-dashed border-[#cfe4f2] flex items-center justify-center">
                <span className="text-[12px] text-[#a8bccb] italic">Quote coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CommitteePlaceholder = () => (
  <div className="mt-14 bg-[#f2f8fc] rounded-2xl border border-dashed border-[#cfe4f2] p-8 md:p-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#2e8bc0]">
        <Users className="w-5 h-5" />
      </div>
      <h3 className="text-[20px] md:text-[22px] font-bold text-[#143a55]">
        Committee Members
      </h3>
    </div>
    <p className="text-[#385365] text-[15px] leading-relaxed mb-6 max-w-[720px]">
      Secretary, Treasurer, Vice-President and other committee members will be
      added here soon.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["Secretary", "Treasurer", "Vice-President", "Joint Secretary"].map((role) => (
        <div
          key={role}
          className="bg-white rounded-xl border border-dashed border-[#cfe4f2] p-5 text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-[#f2f8fc] border-2 border-dashed border-[#cfe4f2] mb-3 flex items-center justify-center text-[#a8bccb]">
            <Users className="w-6 h-6" />
          </div>
          <p className="text-[13px] font-semibold text-[#143a55]">{role}</p>
          <p className="text-[11px] text-[#a8bccb] italic mt-1">Coming soon</p>
        </div>
      ))}
    </div>
  </div>
);

const LeadershipSection = () => {
  return (
    <section id="leadership" className="bg-white py-20">
      <div className="relative mb-12">
        <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-[#cfe4f2]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] bg-white pr-8">
            Leadership
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <p className="text-[#385365] text-[16px] md:text-[17px] max-w-[760px] mb-12 leading-relaxed">
          Meet the leaders driving the growth of Icestock Sport in Maharashtra &mdash;
          from the state association to our Satara district chapter.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
          {leadership.map((l) => (
            <LeaderCard key={l.id} leader={l} />
          ))}
        </div>

        <CommitteePlaceholder />
      </div>
    </section>
  );
};

export default LeadershipSection;
