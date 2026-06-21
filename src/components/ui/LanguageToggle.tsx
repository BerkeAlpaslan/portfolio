"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="px-2.5 py-1.5 rounded-lg text-sm font-mono font-medium transition-colors hover:bg-navy-800/50 dark:hover:bg-navy-800 text-slate-muted hover:text-amber-primary"
      aria-label={locale === "en" ? "Türkçe'ye geç" : "Switch to English"}
    >
      {locale === "en" ? "TR" : "EN"}
    </button>
  );
}
