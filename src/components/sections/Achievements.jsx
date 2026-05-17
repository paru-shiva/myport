import { motion } from 'framer-motion';
import { TrendingUp, Search, Rocket, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { achievements } from '../../data/experience';
import { useInView } from '../../hooks/useInView';
import { useCounter } from '../../hooks/useCounter';

function StatCard({ value, suffix, label, description, icon: Icon, delay }) {
  const [ref, isInView] = useInView({ threshold: 0.4 });
  const count = useCounter(value, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass gradient-border rounded-2xl p-6 text-center sm:p-8"
    >
      <Icon className="mx-auto mb-4 h-8 w-8 text-indigo-400" aria-hidden />
      <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {count}
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="mt-2 font-semibold text-slate-200">{label}</p>
      <p className="mt-1 text-xs text-slate-500 sm:text-sm">{description}</p>
    </motion.div>
  );
}

const achievementIcons = [TrendingUp, Search, Users, Rocket];

const proofPoints = [
  'Websites ranked on Google for competitive keywords',
  '5+ million organic page views across deployed platforms',
  'Production deployments with payments, auth & admin tools',
  '5+ years of real freelance client delivery',
];

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-20 sm:py-24 lg:py-28" aria-labelledby="achievements-heading">
      <div className="section-container">
        <SectionHeading
          label="Impact"
          title="Measurable Results"
          description="Not just code—business outcomes through SEO, scale, and reliable deployments."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {achievements.map((stat, i) => (
            <StatCard key={stat.label} {...stat} icon={achievementIcons[i]} delay={i * 0.08} />
          ))}
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-slate-300"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </AnimatedSection>
  );
}
