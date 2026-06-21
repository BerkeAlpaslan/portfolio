import type { Metadata } from "next";
import { Syne, Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berke Alpaslan | Backend Developer",
  description:
    "Portfolio of Berke Alpaslan — Backend Developer specializing in C#, .NET, clean architecture, with a passion for networking and DevOps.",
  keywords: [
    "Berke Alpaslan",
    "Backend Developer",
    ".NET",
    "C#",
    "ASP.NET Core",
    "Portfolio",
    "DevOps",
    "Network",
  ],
  authors: [{ name: "Berke Alpaslan" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Berke Alpaslan | Backend Developer",
    description:
      "Backend Developer specializing in C#, .NET, clean architecture, with a passion for networking and DevOps.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Berke Alpaslan — .NET Developer | Network & DevOps Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berke Alpaslan | Backend Developer",
    description:
      "Backend Developer specializing in C#, .NET, clean architecture, with a passion for networking and DevOps.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${inter.variable} ${firaCode.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
