"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import NetworkMesh from "@/components/ui/NetworkMesh";
import TypeWriter from "@/components/ui/TypeWriter";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkMesh />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-muted font-mono text-sm md:text-base mb-4"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-dark-text dark:text-slate-text"
        >
          {t.hero.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-mono text-lg md:text-xl text-amber-primary h-8"
        >
          <TypeWriter words={t.hero.taglines} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-amber-primary text-navy-950 font-semibold rounded-lg hover:bg-amber-dark transition-colors"
          >
            {t.hero.cta_projects}
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-slate-muted/30 rounded-lg font-semibold text-slate-muted hover:border-amber-primary hover:text-amber-primary transition-colors"
          >
            {t.hero.cta_contact}
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-slate-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
