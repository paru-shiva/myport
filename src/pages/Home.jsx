import { lazy, Suspense } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';

const Skills = lazy(() => import('../components/sections/Skills'));
const Services = lazy(() => import('../components/sections/Services'));
const Projects = lazy(() => import('../components/sections/Projects'));
const Experience = lazy(() => import('../components/sections/Experience'));
const Achievements = lazy(() => import('../components/sections/Achievements'));
const Process = lazy(() => import('../components/sections/Process'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const Contact = lazy(() => import('../components/sections/Contact'));

function SectionFallback() {
  return (
    <div className="section-container py-20" aria-hidden>
      <div className="h-8 w-48 animate-pulse rounded-lg bg-white/5 mx-auto" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Achievements />
        <Process />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  );
}
