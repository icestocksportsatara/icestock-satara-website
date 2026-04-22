import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, siteInfo } from "../mock";

const Logo = () => (
  <a href="#home" className="flex items-center gap-3 group">
    <img
      src={siteInfo.logo}
      alt={siteInfo.name}
      referrerPolicy="no-referrer"
      className="w-12 h-12 object-contain rounded-md"
    />
    <div className="hidden sm:flex flex-col leading-tight">
      <span className="text-[#143a55] font-bold text-[15px] tracking-tight">
        Icestock Sport Association
      </span>
      <span className="text-[#2e8bc0] font-semibold text-[13px] tracking-wide uppercase">
        of Satara
      </span>
    </div>
    <span className="text-[#143a55] font-bold text-base sm:hidden">ISSA Satara</span>
  </a>
);

const Header = () => {
  const [lang, setLang] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_12px_rgba(20,58,85,0.08)]" : "border-b border-[#e6edf2]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDrop(item.label)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <a
                href={item.href}
                className="px-4 py-2.5 text-[15px] text-[#143a55] font-medium hover:text-[#2e8bc0] transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
              </a>
              {item.dropdown && openDrop === item.label && (
                <div className="absolute top-full left-0 pt-2 min-w-[220px] z-50">
                  <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(20,58,85,0.15)] border border-[#eef3f6] overflow-hidden py-2">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-5 py-2.5 text-[14px] text-[#143a55] hover:bg-[#f2f8fc] hover:text-[#2e8bc0] transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="ml-4 flex items-center bg-[#eaf4fb] rounded-full p-1 text-[13px] font-semibold">
            {["DE", "EN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3.5 py-1.5 rounded-full transition-colors ${
                  lang === l ? "bg-[#2e8bc0] text-white" : "text-[#143a55]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>

        <button
          className="lg:hidden text-[#143a55]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e6edf2] px-5 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-[15px] text-[#143a55] font-medium border-b border-[#eef3f6] last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex items-center bg-[#eaf4fb] rounded-full p-1 w-fit text-[13px] font-semibold">
            {["DE", "EN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3.5 py-1.5 rounded-full ${
                  lang === l ? "bg-[#2e8bc0] text-white" : "text-[#143a55]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
