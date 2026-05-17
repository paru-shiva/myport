import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { personal, heroTechBadges } from '../../data/personal';
import Button from '../ui/Button';
import TypingText from '../ui/TypingText';
import { scrollToSection } from '../../utils/scroll';

const floatingVariants = {
  animate: (i) => ({
    y: [0, -12, 0],
    transition: { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 sm:pt-24 lg:pt-28"
      aria-label="Introduction"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      </motion.div>

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </p>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{personal.name}</span>
          </h1>

          <p className="mt-3 text-lg font-medium text-slate-300 sm:text-xl lg:text-2xl">
            {personal.title}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0 lg:text-lg">
            <TypingText
              phrases={[
                personal.tagline,
                'SEO-focused production deployments.',
                'React + Node.js full stack solutions.',
                'Scalable APIs & performance optimization.',
              ]}
              className="text-slate-300"
            />
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Button
              as={motion.button}
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              as={motion.button}
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              as="a"
              href={personal.resumePath}
              download
              className="w-full sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
            {heroTechBadges.map((badge, i) => (
              <motion.span
                key={badge}
                custom={i}
                variants={floatingVariants}
                animate="animate"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300 sm:text-sm"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 flex flex-col items-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 opacity-60 blur-2xl scale-110" />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="gradient-border relative h-44 w-44 overflow-hidden rounded-full sm:h-[14.4rem] sm:w-[14.4rem] lg:h-64 lg:w-64 xl:h-[19.2rem] xl:w-[19.2rem]"
            >
              <img
                src={personal.profileImage}
                alt={`${personal.name} - Full Stack Web Developer`}
                className="h-full w-full scale-105 object-cover object-[center_22%]"
                width={307}
                height={307}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  e.currentTarget.src = '/assets/profile-placeholder.svg';
                }}
              />
            </motion.div>
          </div>

          <motion.a
            href={`tel:${personal.phoneE164}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ scale: 1.03 }}
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 shadow-lg shadow-indigo-500/10 backdrop-blur-xl transition-colors hover:border-cyan-500/30 hover:bg-white/[0.07] sm:mt-7 sm:px-5 sm:py-3"
            aria-label={`Call ${personal.phoneE164}`}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 shadow-md shadow-indigo-500/30 transition-transform group-hover:scale-105">
              <Phone className="h-4 w-4 text-white" strokeWidth={2.25} aria-hidden />
              <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md" aria-hidden />
            </span>
            <span className="font-mono text-sm font-medium tracking-wide text-slate-200 sm:text-base">
              {personal.phoneE164}
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
