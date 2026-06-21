"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const navLinks = ["about", "skills", "experience", "projects", "contact"] as const;

export default function Navbar() {
  const { t, locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light-surface/80 dark:bg-navy-950/80 backdrop-blur-lg shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display font-bold text-lg text-amber-primary hover:text-amber-dark transition-colors"
        >
          BaraCuda
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className="text-sm font-medium text-slate-muted hover:text-amber-primary transition-colors"
            >
              {t.nav[link]}
            </button>
          ))}
          <a
            href={locale === "tr" ? "/resumes/resume-tr.pdf" : "/resumes/resume-en.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-sm font-semibold rounded-lg bg-amber-primary text-navy-950 hover:bg-amber-dark transition-colors"
          >
            {t.nav.resume}
          </a>
          <div className="flex items-center gap-1 ml-2 pl-2 border-l border-slate-muted/20">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-muted hover:text-amber-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light-surface/95 dark:bg-navy-950/95 backdrop-blur-lg border-t border-slate-muted/10"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleClick(link)}
                  className="text-left text-sm font-medium text-slate-muted hover:text-amber-primary transition-colors py-2"
                >
                  {t.nav[link]}
                </button>
              ))}
              <a
                href={locale === "tr" ? "/resumes/resume-tr.pdf" : "/resumes/resume-en.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm font-semibold text-amber-primary hover:text-amber-dark transition-colors py-2"
              >
                {t.nav.resume}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
