import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Sun, Moon } from 'lucide-react';
import Modal from '../common/Modal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [demoData, setDemoData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Cleaned Nav Links (Removed Platform & How It Works per user request)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Solutions', path: '/solution-portfolio' },
    { name: 'Technical Expertise', path: '/technical-expertise' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoFormSubmitted(true);
    setTimeout(() => {
      setDemoFormSubmitted(false);
      setDemoModalOpen(false);
      setDemoData({ name: '', email: '', phone: '', company: '' });
    }, 2500);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060B12]/90 backdrop-blur-xl border-b border-[#1E293B] shadow-2xl shadow-black/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between">
            
            {/* Left: Official Red Prudent Systems Logo */}
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-black p-1 shadow-lg shadow-red-500/30 group-hover:scale-105 transition-all border border-slate-700/80 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="/images/prudent_systems_official_logo.png"
                  alt="Prudent Systems Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1 font-sans">
                  PRUDENT <span className="text-[#00E5FF]">SYSTEMS</span>
                </span>
                <span className="text-[9px] tracking-[0.18em] text-[#00E5FF] font-mono -mt-1 uppercase font-bold">
                  prusys.com
                </span>
              </div>
            </NavLink>

            {/* Center: Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-200 ${
                      isActive && link.path === '/'
                        ? 'text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right: Action Buttons & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2.5 rounded-full bg-[#0E1522] border border-slate-800 text-amber-400 hover:text-amber-300 hover:border-amber-400/50 transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-sky-500" />
                )}
              </button>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] flex items-center gap-2 active:scale-95 cursor-pointer font-sans"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-[#0E1522] border border-slate-800 text-amber-400"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-sky-500" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#0E1522] border border-slate-800 text-slate-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#060B12]/95 backdrop-blur-2xl border-b border-slate-800 px-6 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-[#00E5FF]/10 hover:text-[#00E5FF]"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <button
                onClick={toggleTheme}
                className="w-full py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-xs font-mono font-bold text-slate-200 flex items-center justify-center gap-2"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-500" />}
                <span>Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#00E5FF] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#00E5FF]/30"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Demo Request Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Schedule Industrial IoT Solution Demo"
      >
        {demoFormSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Demo Scheduled</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Our enterprise solution engineers will contact you shortly to demonstrate our live SCADA telemetry & predictive maintenance platform.
            </p>
          </div>
        ) : (
          <form onSubmit={handleDemoSubmit} className="space-y-4 font-sans">
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-400 mb-1 uppercase">Your Name *</label>
              <input
                type="text"
                required
                value={demoData.name}
                onChange={(e) => setDemoData({ ...demoData, name: e.target.value })}
                placeholder="Er. Rajesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B12] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-400 mb-1 uppercase">Work Email *</label>
              <input
                type="email"
                required
                value={demoData.email}
                onChange={(e) => setDemoData({ ...demoData, email: e.target.value })}
                placeholder="rajesh@railways.gov.in"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B12] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono font-bold text-slate-400 mb-1 uppercase">Organization *</label>
              <input
                type="text"
                required
                value={demoData.company}
                onChange={(e) => setDemoData({ ...demoData, company: e.target.value })}
                placeholder="Indian Railways / Manufacturing Plant"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060B12] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#00E5FF]/30 cursor-pointer"
            >
              Request Solution Demo
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
