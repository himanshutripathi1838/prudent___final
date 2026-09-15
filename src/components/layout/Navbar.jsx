import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' }, { name: 'About Us', path: '/about-us' },
  { name: 'Solutions', path: '/solution-portfolio' }, { name: 'Technical Expertise', path: '/technical-expertise' },
  { name: 'Contact Us', path: '/contact-us' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  useEffect(() => { const onScroll = () => setIsScrolled(window.scrollY > 20); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => setMobileMenuOpen(false), [location]);
  const goToContact = () => { setMobileMenuOpen(false); navigate('/contact-us#contact-form'); };

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${(isScrolled || mobileMenuOpen) ? 'border-[#1E293B] bg-[#060B12]/95 shadow-xl backdrop-blur-xl' : 'border-transparent bg-[#060B12]/75 backdrop-blur-md'}`}>
    <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-3 px-3 sm:px-8 xl:px-16">
      <NavLink to="/" aria-label="Prudent Systems home" className="flex min-w-0 items-center gap-2 sm:gap-3">
        <img src="/images/prudent_systems_official_logo.png" alt="" width="44" height="44" className="h-11 w-11 shrink-0 rounded-xl border border-slate-700 bg-black object-contain p-1" />
        <span className="text-sm font-extrabold text-white sm:text-lg">PRUDENT <span className="text-[#00E5FF]">SYSTEMS</span><small className="block font-mono text-[9px] tracking-widest text-[#00E5FF]">PRUSYS.COM</small></span>
      </NavLink>
      <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
        {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-slate-300 hover:text-white'}`}>{link.name}</NavLink>)}
      </nav>
      <div className="flex items-center gap-2">
        <button onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#0E1522] text-amber-400">{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5 text-sky-400" />}</button>
        <button onClick={goToContact} className="hidden min-h-11 items-center gap-2 rounded-full bg-[#00E5FF] px-5 text-sm font-bold text-slate-950 xl:flex">Request a Demo <ArrowRight className="h-4 w-4" /></button>
        <button onClick={() => setMobileMenuOpen(open => !open)} aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-[#0E1522] text-white xl:hidden">{mobileMenuOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    {mobileMenuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-80px)] space-y-1 overflow-y-auto border-t border-slate-800 bg-[#060B12] px-4 py-5 xl:hidden">
      {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({ isActive }) => `block min-h-11 rounded-xl px-4 py-3 font-semibold ${isActive ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-slate-200'}`}>{link.name}</NavLink>)}
      <button onClick={goToContact} className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-5 font-bold text-slate-950">Request a Demo <ArrowRight className="h-4 w-4" /></button>
    </nav>}
  </header>;
}
