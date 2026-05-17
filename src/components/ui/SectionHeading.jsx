import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 text-center sm:mb-12 lg:mb-14 ${className}`}
    >
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
          {label}
        </p>
      )}
      <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
