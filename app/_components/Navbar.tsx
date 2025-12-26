'use client';

import { useState, useEffect } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:scale-110 transition-transform duration-500"
  >
    <path
      d="M20 20H80V45H45V80H20V20Z"
      fill="white"
      className="group-hover:fill-[#7CFFB2] transition-colors"
    />
    <path d="M55 55H80V80H55V55Z" fill="#7CFFB2" />
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.1"
    />
  </svg>
);

const navLinks = [
  { name: 'INÍCIO', href: '#' },
  { name: 'SOBRE', href: '#about' },
  { name: 'PROJETOS', href: '#projects' },
  { name: 'HABILIDADES', href: '#skills' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-4 group">
            <Logo />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white">
                RAMON
              </span>
              <span className="text-[10px] tracking-[0.4em] text-[#7CFFB2] uppercase">
                Front end
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em]">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#9CA3AF] hover:text-[#7CFFB2] relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7CFFB2] transition-all group-hover:w-full" />
              </a>
            ))}

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl border border-[#7CFFB2]/30 text-[#7CFFB2] hover:bg-[#7CFFB2] hover:text-black transition"
            >
              VAMOS CONVERSAR
            </a>
          </div>

        
          <button
            aria-label="Abrir menu"
            className="md:hidden p-2 rounded-lg bg-white/5 text-white z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <BiX size={22} /> : <BiMenu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#05070a] flex items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-10 text-2xl font-bold text-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#7CFFB2] transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-[#7CFFB2] text-black px-10 py-4 rounded-2xl"
          >
            CONTATO
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
