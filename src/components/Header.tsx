import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-[#ffffff] shadow-md">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/" className="h-8 sm:h-10">
              <img
                src="/images/poelzl_logo.svg"
                alt="Poelzl Logo"
                className="h-full"
              />
            </a>
            <a href="https://kuechenstudio-bergheim.at" className="h-12 sm:h-16">
              <img
                src="/images/me_logo_black.png"
                alt="Küchenstudio Bergheim Logo"
                className="h-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              href="#produkte"
              className="text-[#000000] uppercase font-semibold tracking-wide transition-all"
            >
              Produkte
            </a>
            <a
              href="#ueber-poelzl"
              className="text-[#000000] uppercase font-semibold tracking-wide transition-all"
            >
              Über Cooking Surface
            </a>
            <a
              href="/#referenzen"
              className="text-[#000000] uppercase font-semibold tracking-wide transition-all"
            >
              Referenzen
            </a>
            <a href="/#beratung">
              <Button className="bg-[#F7ED6C] uppercase font-semibold text-black hover:bg-[#F7ED6C] pt-3 px-5 shadow-md rounded-3xl">
                Jetzt Beratung anfordern
              </Button>
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white  text-black border-t border-gray-100 shadow-md">
            <div className="flex flex-col items-start gap-4 py-6 pl-6">
              <a
                href="/#produkte"
                className="text-black capitalize  uppercase font-semibold transition-all"
                onClick={toggleMobileMenu}
              >
                Produkte
              </a>
              <a
                href="/#ueber-cooking-surface"
                className="text-black capitalize uppercase font-semibold transition-all"
                onClick={toggleMobileMenu}
              >
                Über Cooking Surface
              </a>
              <a
                href="/#referenzen"
                className="text-black capitalize  uppercase font-semibold transition-all"
                onClick={toggleMobileMenu}
              >
                Referenzen
              </a>
              <a href="/#beratung" onClick={toggleMobileMenu}>
                <Button className="bg-[#F7ED6C] text-black uppercase font-semibold hover:bg-[#F7ED6C] pt-3 px-5 shadow-md rounded-3xl">
                  Jetzt Beratung anfordern
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
