import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { certifications, education } from '../../data/personal';

const highlights = [
  {
    title: '5+ Years Freelancing',
    text: 'Delivering client-ready full stack applications—from requirements to deployment—with a focus on business outcomes.',
  },
  {
    title: '8+ Years Teaching CS',
    text: 'Former Assistant Professor with deep fundamentals in algorithms, databases, and software engineering—translated into clear client communication.',
  },
  {
    title: 'SEO & Scale',
    text: 'Built and ranked content platforms with 5M+ organic page views. Technical SEO, performance, and structured data are part of every build.',
  },
  {
    title: 'Production Mindset',
    text: 'Real deployment experience: payments, auth, admin panels, APIs, and maintenance—not tutorial demos.',
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 sm:py-24 lg:py-28" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeading
          label="About"
          title="Developer Who Ships Real Products"
          description="I combine freelance delivery, academic depth, and SEO expertise to build web applications that perform in production."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              I&apos;m a <strong className="text-slate-200">Full Stack Web Developer</strong> with
              over five years of freelance experience building e-commerce platforms, subscription
              systems, job portals, and content websites that rank on Google and handle real traffic.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Since 2017, I have spent 8+ years as an{' '}
              <strong className="text-slate-200">Assistant Professor in Computer Science</strong>,
              which sharpened my problem-solving approach and ability to explain complex systems
              clearly—skills that translate directly into better client collaboration.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              My stack centers on <strong className="text-slate-200">React, Node.js, MySQL, and Python</strong>,
              with strong emphasis on REST APIs, authentication, admin dashboards, and SEO-optimized
              frontends. I understand deployment, hosting, and long-term maintenance—not just
              writing code.
            </p>

            <motion.div className="flex flex-wrap gap-4 pt-2">
              <div className="glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm">
                <MapPin className="h-4 w-4 text-cyan-400" aria-hidden />
                <span className="text-slate-300">Hyderabad, India · Remote-friendly</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="mb-3 flex items-center gap-2 text-indigo-400">
              <GraduationCap className="h-5 w-5" />
              <h3 className="font-semibold text-white">Education</h3>
            </div>
            <p className="font-medium text-slate-200">{education.degree}</p>
            <p className="mt-1 text-sm text-slate-400">{education.institution}</p>
            <p className="mt-2 text-sm text-slate-500">
              {education.year} · Score: {education.score}
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="mb-3 flex items-center gap-2 text-cyan-400">
              <Award className="h-5 w-5" />
              <h3 className="font-semibold text-white">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-slate-400">
                  • {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
