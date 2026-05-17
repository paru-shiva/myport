import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import SkillBar from '../ui/SkillBar';
import { skillCategories } from '../../data/skills';

const categoryIcons = { Layout, Server, Database, Wrench };

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 sm:py-24 lg:py-28" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A balanced full stack toolkit—from responsive UIs to secure APIs, databases, and deployment."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category.icon] || Layout;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass gradient-border rounded-2xl p-6 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-indigo-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
