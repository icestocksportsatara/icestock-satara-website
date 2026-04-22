import React from "react";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { siteInfo } from "../mock";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#143a55] to-[#2e8bc0] text-white">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <div className="flex items-start gap-3 mb-6">
              <img
                src={siteInfo.logo}
                alt={siteInfo.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 object-contain rounded-md bg-white/10 p-1"
              />
              <span className="font-semibold text-[15px] leading-tight">
                Icestock Sport<br />Association of Satara
              </span>
            </div>
            <p className="text-[13px] text-white/75 italic leading-relaxed max-w-[240px]">
              &ldquo;{siteInfo.tagline}&rdquo;
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[15px] font-semibold mb-4 text-white/90 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-[14px] text-white/85">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-white break-all">
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold mb-4 text-white/90 uppercase tracking-wider">Association</h4>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li><a href="#about" className="hover:text-white">About ISSA Satara</a></li>
              <li><span className="text-white/70">President: {siteInfo.president}</span></li>
              <li><span className="text-white/70">Founded: {siteInfo.foundedYear}</span></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-semibold mb-4 text-white/90 uppercase tracking-wider">Sport</h4>
            <ul className="space-y-2.5 text-[14px] text-white/85">
              <li><a href="#disciplines" className="hover:text-white">Team Game</a></li>
              <li><a href="#disciplines" className="hover:text-white">Team Target</a></li>
              <li><a href="#disciplines" className="hover:text-white">Team Distance</a></li>
              <li><a href="#disciplines" className="hover:text-white">Individual Target</a></li>
              <li><a href="#disciplines" className="hover:text-white">Individual Distance</a></li>
              <li><a href="#news" className="hover:text-white">News</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/15">
          <div className="flex gap-3">
            <a
              href={siteInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-[18px] h-[18px]" />
            </a>
          </div>
          <div className="flex flex-wrap gap-5 text-[13px] text-white/70">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <span>{"\u00a9"} {new Date().getFullYear()} ISSA Satara. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
