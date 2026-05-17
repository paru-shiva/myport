import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="py-20 sm:py-24 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <SectionHeading
          label="Testimonials"
          title="Client Feedback"
          description="What clients say about working together on real-world web projects."
        />

        <motion.div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-indigo-500/40" aria-hidden />
              <p className="text-sm leading-relaxed text-slate-400">&ldquo;{item.text}&rdquo;</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="font-medium text-slate-200">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
