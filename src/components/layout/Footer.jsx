import { Code2, Mail, Phone, ExternalLink } from 'lucide-react';
import { personal, navLinks } from '../../data/personal';
import { scrollToSection } from '../../utils/scroll';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#06060c]">
      <div className="section-container py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-lg font-bold text-white">{personal.name}</p>
            <p className="mt-2 max-w-md text-sm text-slate-400">{personal.tagline}</p>
            <p className="mt-4 text-xs text-slate-500">
              Built with React, Vite, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${personal.phone}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {personal.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              {personal.websites.map((site) => (
                <li key={site.url}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">Freelance Full Stack Developer · SEO Specialist</p>
        </div>
      </div>
    </footer>
  );
}
