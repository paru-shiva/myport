import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { processSteps } from '../../data/experience';

export default function Process() {
  return (
    <AnimatedSection
      id="process"
      className="py-20 sm:py-24 lg:py-28 bg-white/[0.02]"
      aria-labelledby="process-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Workflow"
          title="How I Work"
          description="A structured, transparent process from discovery to long-term support."
        />

        <div className="relative">
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-cyan-400/50"
            aria-hidden
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass relative rounded-2xl p-5 text-center lg:p-4"
              >
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-white lg:text-xs xl:text-sm">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </AnimatedSection>
  );
}
