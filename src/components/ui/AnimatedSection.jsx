import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  children,
  className = '',
  id,
  as: Tag = 'section',
  delay = 0,
}) {
  const Component = motion[Tag] || motion.section;

  return (
    <Component
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={defaultVariants}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
