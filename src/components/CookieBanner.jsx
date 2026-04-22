import React from "react";
import { X } from "lucide-react";

const CookieBanner = ({ onDismiss }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-[420px] z-[60] bg-white rounded-xl shadow-[0_20px_60px_rgba(20,58,85,0.25)] border border-[#e6edf2] p-6 animate-in">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-[#143a55] font-semibold text-[17px]">We value your privacy</h4>
        <button onClick={onDismiss} className="text-[#6b8294] hover:text-[#143a55]" aria-label="Close">
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-[#455a6b] text-[13.5px] leading-relaxed mb-5">
        We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. By clicking “Accept All”, you consent to our use of cookies.
      </p>
      <div className="flex flex-wrap gap-2">
        <button onClick={onDismiss} className="px-4 py-2 rounded-full text-[13px] font-medium border border-[#2e8bc0] text-[#2e8bc0] hover:bg-[#eaf4fb] transition-colors">
          Customise
        </button>
        <button onClick={onDismiss} className="px-4 py-2 rounded-full text-[13px] font-medium border border-[#d5e0e8] text-[#455a6b] hover:bg-[#f2f8fc] transition-colors">
          Reject All
        </button>
        <button onClick={onDismiss} className="px-5 py-2 rounded-full text-[13px] font-medium bg-[#2e8bc0] hover:bg-[#236b95] text-white transition-colors">
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
