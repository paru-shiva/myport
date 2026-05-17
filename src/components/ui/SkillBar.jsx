import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export default function SkillBar({ name, level }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <motion.div ref={ref} className="space-y-2">
      <motion.div className="flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </motion.div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
