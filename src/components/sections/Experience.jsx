import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="py-20 sm:py-24 lg:py-28 bg-white/[0.02]"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="A unique blend of industry delivery and academic excellence."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-400 sm:left-1/2 sm:-translate-x-px"
            aria-hidden
          />

          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-12 flex flex-col sm:mb-16 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-indigo-500 bg-[#0a0a12] sm:left-1/2">
                  <Icon className="h-4 w-4 text-indigo-400" aria-hidden />
                </div>

                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <span className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">
                    {item.duration}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                  <p className="text-sm text-cyan-400/90">{item.company}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                </div>

                <motion.div
                  className={`ml-12 mt-4 sm:mt-0 sm:w-1/2 ${isLeft ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`}
                >
                  <ul className="glass rounded-2xl p-5 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="text-sm text-slate-400">
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
