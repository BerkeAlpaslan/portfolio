"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageContext";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/BerkeAlpaslan",
    icon: <GithubIcon size={20} />,
    handle: "@BerkeAlpaslan",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/berkealpaslan",
    icon: <LinkedinIcon size={20} />,
    handle: "berkealpaslan",
  },
  {
    name: "Email",
    href: "mailto:alpaslanberke@gmail.com",
    icon: <Mail size={20} />,
    handle: "alpaslanberke@gmail.com",
  },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl md:text-4xl mb-4 text-dark-text dark:text-slate-text"
        >
          {t.contact.title}
          <span className="text-amber-primary">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-slate-muted leading-relaxed mb-10"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.a
          href="mailto:alpaslanberke@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-primary text-navy-950 font-semibold rounded-lg hover:bg-amber-dark transition-colors text-lg mb-12"
        >
          <Mail size={20} />
          {t.contact.email}
        </motion.a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
              className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-light-surface dark:bg-navy-900/50 border border-slate-muted/10 hover:border-amber-primary/30 transition-all"
            >
              <span className="text-amber-primary">{social.icon}</span>
              <span className="text-sm text-slate-muted group-hover:text-dark-text dark:group-hover:text-slate-text transition-colors">
                {social.handle}
              </span>
              <ArrowUpRight size={14} className="text-slate-muted/50 group-hover:text-amber-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
