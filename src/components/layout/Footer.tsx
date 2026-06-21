"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-muted/10 px-6 md:px-12 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-muted">
          &copy; {new Date().getFullYear()} Berke Alpaslan. {t.footer.rights}
        </p>
        <p className="text-xs text-slate-muted/60">{t.footer.built}</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/BerkeAlpaslan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-amber-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/berkealpaslan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-amber-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:alpaslanberke@gmail.com"
            className="text-slate-muted hover:text-amber-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
