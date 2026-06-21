"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Network, Wrench, GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageContext";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Code2 size={20} />,
  architecture: <Layers size={20} />,
  devops: <Cloud size={20} />,
  networking: <Network size={20} />,
  tools: <Wrench size={20} />,
  learning: <GraduationCap size={20} />,
};

export default function Skills() {
  const { t } = useLanguage();

  const categoryLabels = t.skills as Record<string, string>;

  return (
    <SectionWrapper id="skills" className="bg-light-surface dark:bg-navy-900/30">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-dark-text dark:text-slate-text">
        {t.skills.title}
        <span className="text-amber-primary">.</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-xl bg-light-surface dark:bg-navy-900/50 border border-slate-muted/10 hover:border-amber-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-primary/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-amber-primary">{categoryIcons[category.key]}</span>
              <h3 className="font-display font-semibold text-dark-text dark:text-slate-text">
                {categoryLabels[category.key]}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-light-bg dark:bg-navy-950 text-slate-muted border border-slate-muted/10 group-hover:border-amber-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
