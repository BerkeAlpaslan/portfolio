"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about">
      <h2 className="font-display font-bold text-3xl md:text-4xl mb-12 text-dark-text dark:text-slate-text">
        {t.about.title}
        <span className="text-amber-primary">.</span>
      </h2>

      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-amber-primary/20">
            <Image
              src="/images/berke.jpg"
              alt="Berke Alpaslan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 256px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
          </div>
        </motion.div>

        <div className="md:col-span-3 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-slate-muted leading-relaxed"
          >
            {t.about.p1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-muted leading-relaxed"
          >
            {t.about.p2}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-slate-muted leading-relaxed"
          >
            {t.about.p3}
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
