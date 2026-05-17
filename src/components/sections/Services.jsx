import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { services } from '../../data/services';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Services() {
  return (
    <AnimatedSection
      id="services"
      className="py-20 sm:py-24 lg:py-28 bg-white/[0.02]"
      aria-labelledby="services-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Services"
          title="What I Build For Clients"
          description="End-to-end solutions for startups, agencies, and business owners who need production-ready web applications."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="group glass rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-indigo-500/5 sm:p-7"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-105">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-white sm:text-lg">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
