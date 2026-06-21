"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Locale, TranslationKeys } from "./translations";

type LanguageContextType = {
  locale: Locale;
  t: TranslationKeys;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && translations[saved]) {
      setLocale(saved);
    }
  }, []);

  const toggleLocale = () => {
    const next = locale === "en" ? "tr" : "en";
    setLocale(next);
    localStorage.setItem("locale", next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
