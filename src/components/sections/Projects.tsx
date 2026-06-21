"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";

export default function Projects() {
  const { t, locale } = useLanguage();

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-light-surface dark:bg-navy-900/30">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-dark-text dark:text-slate-text">
        {t.projects.title}
        <span className="text-amber-primary">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featured.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-xl bg-light-surface dark:bg-navy-900/50 border border-slate-muted/10 hover:border-amber-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-primary/5 flex flex-col"
          >
            <h3 className="font-display font-semibold text-lg mb-2 text-dark-text dark:text-slate-text group-hover:text-amber-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-slate-muted leading-relaxed mb-4 flex-1">
              {project.description[locale]}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-light-bg dark:bg-navy-950 text-blue-primary border border-blue-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-muted hover:text-amber-primary transition-colors"
              >
                <GithubIcon size={16} />
                {t.projects.viewCode}
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-muted hover:text-amber-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  {t.projects.viewDemo}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {other.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              whileHover={{ y: -2 }}
              className="group p-4 rounded-lg bg-light-surface dark:bg-navy-900/30 border border-slate-muted/10 hover:border-amber-primary/20 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display font-medium text-sm text-dark-text dark:text-slate-text group-hover:text-amber-primary transition-colors">
                  {project.title}
                </h4>
                <GithubIcon size={14} className="text-slate-muted/50" />
              </div>
              <p className="text-xs text-slate-muted line-clamp-2">
                {project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-light-bg dark:bg-navy-950 text-slate-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
