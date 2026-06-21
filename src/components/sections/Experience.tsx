"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [t.experience.egebis, t.experience.sedna];

  return (
    <SectionWrapper id="experience">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-dark-text dark:text-slate-text">
        {t.experience.title}
        <span className="text-amber-primary">.</span>
      </h2>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-primary/50 via-blue-primary/30 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative pl-12 md:pl-20"
            >
              <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-amber-primary/20 border-2 border-amber-primary flex items-center justify-center">
                <Briefcase size={10} className="text-amber-primary" />
              </div>

              <div className="p-6 rounded-xl bg-light-surface dark:bg-navy-900/50 border border-slate-muted/10 hover:border-amber-primary/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-dark-text dark:text-slate-text">
                      {exp.role}
                    </h3>
                    <p className="text-amber-primary font-medium">
                      {exp.company}{" "}
                      <span className="text-slate-muted text-sm font-normal">
                        &middot; {exp.type}
                      </span>
                    </p>
                  </div>
                  <div className="text-sm text-slate-muted font-mono text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-muted">
                      <span className="text-amber-primary mt-1.5 shrink-0">&#9656;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
