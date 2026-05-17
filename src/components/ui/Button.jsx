import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40',
  secondary:
    'glass text-slate-100 hover:bg-white/10 border-white/10',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  outline:
    'border border-white/15 text-slate-200 hover:border-indigo-400/50 hover:bg-indigo-500/10',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50 disabled:pointer-events-none sm:px-6 sm:py-3 sm:text-base';

  if (Component === motion.button) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
