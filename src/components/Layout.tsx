import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Box, Github, Instagram, Linkedin, Mail, MapPin, Palette, PenTool, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';

const links = [
  ['Home', '/'],
  ['Portfolio', '/portfolio'],
  ['3D Viewer', '/viewer'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

const services = ['Product Visualization', 'Architectural Visualization', 'CGI', 'Motion Design'];

const contactDetails = [
  { label: 'Email', value: 'hello@vantaforge.studio', icon: Mail },
  { label: 'Phone', value: '+1 (555) 013-2048', icon: Phone },
  { label: 'Location', value: 'Remote worldwide', icon: MapPin },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'ArtStation', href: 'https://www.artstation.com/', icon: Palette },
  { label: 'Behance', href: 'https://www.behance.net/', icon: PenTool },
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: Instagram },
];

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = open ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
        <motion.nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition duration-500 sm:px-5 ${scrolled ? 'border border-white/10 bg-[#050505]/82 shadow-[0_20px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl' : 'border border-transparent bg-transparent backdrop-blur-0'}`}
          initial={false}
          animate={{ y: scrolled ? 0 : 0 }}
        >
          <Link to="/" className="group flex items-center gap-3 font-semibold tracking-[0.22em] text-[#F5F5F5]" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 transition duration-300 group-hover:scale-105 group-hover:border-[#F5A623] group-hover:bg-[#F5A623]/15">
              <Box className="text-[#F5A623]" size={20} />
            </span>
            <span className="hidden sm:inline">VANTA FORGE</span>
            <span className="sm:hidden">VF</span>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#0D0D0D]/55 p-1 backdrop-blur-xl md:flex">
            {links.map(([label, to]) => (
              <NavLink
                end={to === '/'}
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 ${isActive ? 'text-black' : 'text-[#A3A3A3] hover:text-[#F5F5F5]'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && <motion.span className="absolute inset-0 rounded-full bg-[#F5A623]" layoutId="active-nav-pill" transition={{ duration: 0.25 }} />}
                    <span className="relative z-10">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Button to="/contact" variant="secondary" className="px-5 py-2.5">Let&apos;s Talk</Button>
          </div>

          <button
            className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#121212]/75 text-[#F5F5F5] backdrop-blur-xl md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            type="button"
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[#F5A623] transition duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-[#F5F5F5] transition duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-[#F5A623] transition duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[#050505]/96 px-6 pb-10 pt-28 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-[#F5A623]/60 to-transparent" />
            <nav className="mt-8 flex flex-1 flex-col justify-center gap-4" aria-label="Mobile navigation">
              {links.map(([label, to], index) => (
                <motion.div key={to} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <NavLink
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-[1.5rem] border px-6 py-5 text-4xl font-semibold tracking-[-0.04em] transition ${isActive ? 'border-[#F5A623]/50 bg-[#F5A623] text-black' : 'border-white/10 bg-[#121212]/70 text-[#F5F5F5] hover:border-[#F5A623]/40 hover:bg-[#181818]'}`
                    }
                    to={to}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <Button to="/contact" onClick={() => setOpen(false)} className="w-full">Let&apos;s Talk</Button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 py-14 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F5A623]/10 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1fr_0.8fr]">
            <div>
              <Link to="/" className="group inline-flex items-center gap-3 font-semibold tracking-[0.22em] text-[#F5F5F5]">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 transition group-hover:border-[#F5A623]">
                  <Box className="text-[#F5A623]" size={21} />
                </span>
                VANTA FORGE
              </Link>
              <p className="mt-5 max-w-sm leading-7 text-[#A3A3A3]">
                Premium 3D visualization, cinematic CGI, and motion-led case studies for products, interiors, and creative campaigns.
              </p>
              <div className="mt-6 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/10 p-4 text-sm font-medium text-[#F5F5F5]">
                Currently available for freelance and studio collaborations.
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Navigation</h3>
              <div className="mt-5 space-y-3">
                {links.map(([label, to]) => (
                  <Link className="block text-sm text-[#A3A3A3] transition hover:translate-x-1 hover:text-[#F5A623]" key={to} to={to}>{label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Services</h3>
              <div className="mt-5 space-y-3">
                {services.map((service) => (
                  <p className="text-sm text-[#A3A3A3]" key={service}>{service}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Contact</h3>
              <div className="mt-5 space-y-4">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <p className="flex items-start gap-3 text-sm text-[#A3A3A3]" key={label}>
                    <Icon className="mt-0.5 shrink-0 text-[#F5A623]" size={17} />
                    <span><span className="block text-[#F5F5F5]">{label}</span>{value}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Social</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#121212] text-[#A3A3A3] transition hover:-translate-y-1 hover:border-[#F5A623]/60 hover:text-[#F5A623]" href={href} key={label} rel="noreferrer" target="_blank">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <blockquote className="mt-7 border-l border-[#F5A623] pl-4 text-lg font-semibold leading-7 text-[#F5F5F5]">
                “Every pixel tells a story.”
              </blockquote>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-[#A3A3A3] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Vanta Forge Studio. All rights reserved.</p>
            <p>Built with React.</p>
            <button className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 font-semibold text-[#F5F5F5] transition hover:border-[#F5A623]/60 hover:text-[#F5A623] md:self-auto" onClick={scrollToTop} type="button">
              Back to Top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
