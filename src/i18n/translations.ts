export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      resume: "CV",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Berke Alpaslan",
      taglines: [
        ".NET Developer | Network & DevOps Explorer",
        "Backend Engineer | Clean Architecture Advocate",
        "Building Robust APIs | Shipping Infrastructure",
      ],
      cta_projects: "View Projects",
      cta_contact: "Get in Touch",
      cta_resume: "Download CV",
    },
    about: {
      title: "About Me",
      p1: "I'm a Computer Engineering graduate who builds backend systems with C# and ASP.NET Core. I care about doing things right — Clean Architecture, CQRS, and APIs that are structured to scale. My internship at SednaCloud gave me my first taste of building a real product, and at Egebis I'm a core contributor to an enterprise, SAP-integrated product-configuration platform built for Vestel.",
      p2: "What excites me most goes beyond writing CRUD endpoints. I built an LLM-powered agent that drives the platform's form editor through tool-calling, and led three architecture iterations of a product-visualization microservice — the latest a from-scratch Rust service. I also have a deep curiosity for networking and infrastructure, and I'm hands-on with Docker Swarm deployments at Egebis, not just watching from the sidelines.",
      p3: "I'm currently looking for opportunities where I can keep growing as a backend developer while getting closer to the infrastructure and DevOps side of things — and I'm curious about network engineering too. Whether it's building APIs, running deployment pipelines, or diving deeper into cloud platforms, I want to be where development meets operations.",
    },
    skills: {
      title: "Skills & Technologies",
      backend: "Backend",
      architecture: "Architecture",
      devops: "DevOps & Infrastructure",
      networking: "Networking",
      tools: "Tools & Databases",
      learning: "Currently Learning",
    },
    experience: {
      title: "Experience",
      egebis: {
        role: "Backend Developer",
        type: "Internship → Part-time",
        company: "Egebis",
        location: "Izmir, Turkey",
        period: "Feb 2026 - Present",
        description: [
          "Design and implement a multi-tenant PostgreSQL database migration system (Liquibase), adopted as the team's migration-first standard",
          "Build an LLM-powered agent that drives the platform's form editor through tool-calling, with authorization-aware and screen-state-verified compatibility checks",
          "Lead three architecture iterations of a product-visualization microservice -- the latest a from-scratch Rust service -- plus release validation (K6) and security testing (OWASP ZAP, SAST tooling)",
        ],
      },
      sedna: {
        role: "Backend Developer Intern",
        type: "Summer Internship (1 month)",
        company: "SednaCloud",
        location: "Antalya, Turkey",
        period: "July 2024",
        description: [
          "Built the backend of a hotel reservation system nearly single-handedly using ASP.NET Core",
          "Gained exposure to Angular's non-standalone architecture, learning component/module relationships and modular project structure",
          "First professional experience with REST API design, team collaboration, and full-stack project workflow",
        ],
      },
    },
    projects: {
      title: "Projects",
      viewCode: "Source Code",
      viewDemo: "Live Demo",
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
      email: "Send Email",
    },
    footer: {
      built: "Built with Next.js, Tailwind CSS & Framer Motion",
      rights: "All rights reserved.",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Beceriler",
      experience: "Deneyim",
      projects: "Projeler",
      contact: "İletişim",
      resume: "CV",
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Berke Alpaslan",
      taglines: [
        ".NET Developer | Network & DevOps Meraklısı",
        "Backend Mühendisi | Clean Architecture Tutkunu",
        "Sağlam API'ler | Altyapı Üretiyorum",
      ],
      cta_projects: "Projelerimi Gör",
      cta_contact: "İletişime Geç",
      cta_resume: "CV İndir",
    },
    about: {
      title: "Hakkımda",
      p1: "C# ve ASP.NET Core ile backend sistemleri geliştiren bir Bilgisayar Mühendisliği mezunuyum. İşleri doğru yapmaya önem veriyorum — Clean Architecture, CQRS, ölçeklenebilir ve yapılandırılmış API'ler. SednaCloud'daki stajımda gerçek bir ürün geliştirmenin ilk deneyimini yaşadım, Egebis'te ise Vestel için geliştirilen, SAP entegrasyonlu kurumsal bir ürün konfigürasyon platformuna temel katkı sağlıyorum.",
      p2: "Beni en çok heyecanlandıran şey, sıradan CRUD endpoint'leri yazmanın ötesinde. Platformun form editörünü tool-calling ile yöneten bir LLM ajanı geliştirdim ve bir ürün görselleştirme mikroservisinin üç mimari iterasyonuna öncülük ettim — sonuncusu sıfırdan yazılmış bir Rust servisi. Network ve altyapıya da derin bir merakım var; Egebis'te Docker Swarm deploy süreçlerini artık sadece izlemiyor, bizzat yürütüyorum.",
      p3: "Şu anda backend developer olarak büyümeye devam edebileceğim, aynı zamanda altyapı ve DevOps tarafına yakınlaşabileceğim fırsatlar arıyorum — network mühendisliğine de ilgi duyuyorum. API geliştirmek, deployment pipeline'ları yürütmek ya da bulut platformlarına derinlemesine dalmak — geliştirme ile operasyonun buluştuğu yerde olmak istiyorum.",
    },
    skills: {
      title: "Beceriler & Teknolojiler",
      backend: "Backend",
      architecture: "Mimari",
      devops: "DevOps & Altyapı",
      networking: "Network",
      tools: "Araçlar & Veritabanları",
      learning: "Öğreniyorum",
    },
    experience: {
      title: "Deneyim",
      egebis: {
        role: "Backend Developer",
        type: "Staj → Part-time",
        company: "Egebis",
        location: "İzmir, Türkiye",
        period: "Şubat 2026 - Devam ediyor",
        description: [
          "Çoklu-kiracılı PostgreSQL mimarisi için Liquibase tabanlı bir veritabanı migrasyon sistemi tasarlama ve hayata geçirme; ekibin migration-first standardı olarak benimsendi",
          "Platformun form editörünü tool-calling ile yöneten bir LLM ajanı geliştirme; yetki kontrollü ve ekran durumuna göre doğrulanan uyumluluk kontrolleriyle",
          "Bir ürün görselleştirme mikroservisinin üç mimari iterasyonuna öncülük etme -- sonuncusu sıfırdan yazılmış bir Rust servisi -- ayrıca K6 ile release doğrulama ve OWASP ZAP/SAST ile güvenlik testleri",
        ],
      },
      sedna: {
        role: "Backend Developer Stajyer",
        type: "Yaz Stajı (1 ay)",
        company: "SednaCloud",
        location: "Antalya, Türkiye",
        period: "Temmuz 2024",
        description: [
          "Otel rezervasyon sisteminin backend'ini ASP.NET Core ile neredeyse tek başına geliştirme",
          "Angular'ın non-standalone mimarisinde component/module ilişkilerini ve modüler proje yapısını öğrenme fırsatı",
          "REST API tasarımı, takım çalışması ve full-stack proje sürecinde ilk profesyonel deneyim",
        ],
      },
    },
    projects: {
      title: "Projeler",
      viewCode: "Kaynak Kod",
      viewDemo: "Canlı Demo",
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Şu anda yeni fırsatlar arıyorum. Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, her zaman ulaşabilirsiniz.",
      email: "Email Gönder",
    },
    footer: {
      built: "Next.js, Tailwind CSS & Framer Motion ile yapıldı",
      rights: "Tüm hakları saklıdır.",
    },
  },
};

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
