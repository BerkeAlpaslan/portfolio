export type Project = {
  id: string;
  title: string;
  description: { en: string; tr: string };
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "foodresq",
    title: "FoodResq",
    description: {
      en: "Graduation project — a platform designed to reduce food waste by connecting businesses with surplus food to consumers, built with clean architecture principles.",
      tr: "Bitirme projesi — işletmelerin fazla gıdalarını tüketicilerle buluşturarak gıda israfını azaltmaya yönelik, clean architecture prensiplerine uygun bir platform.",
    },
    tech: ["C#", "ASP.NET Core", "Entity Framework", "Clean Architecture"],
    github: "https://github.com/BerkeAlpaslan/foodresq",
    featured: true,
  },
  {
    id: "pizza-delivery",
    title: "Pizza Delivery Simulator 3000",
    description: {
      en: "Real-time multi-driver coordination system demonstrating TCP/UDP network programming concepts, built with .NET 8.0.",
      tr: "TCP/UDP network programlama konseptlerini gösteren, .NET 8.0 ile geliştirilmiş gerçek zamanlı çoklu kurye koordinasyon sistemi.",
    },
    tech: ["C#", ".NET 8", "TCP/UDP", "Network Programming"],
    github: "https://github.com/BerkeAlpaslan/pizza-delivery-simulator-3000",
    featured: true,
  },
  {
    id: "medisync",
    title: "MediSync API + CLI",
    description: {
      en: "Graduation Project I — a medical synchronization platform with a RESTful API backend and a TypeScript CLI client.",
      tr: "Bitirme Projesi I — RESTful API backend ve TypeScript CLI istemcisi ile medikal senkronizasyon platformu.",
    },
    tech: ["C#", "ASP.NET Core", "TypeScript", "REST API"],
    github: "https://github.com/BerkeAlpaslan/medisync-api",
    featured: true,
  },
  {
    id: "pawmatch",
    title: "PawMatch API",
    description: {
      en: "Software Engineering course project — an API for pet adoption matching, implementing design patterns and SOLID principles.",
      tr: "Yazılım Mühendisliği dersi projesi — tasarım kalıpları ve SOLID prensiplerini uygulayan evcil hayvan sahiplendirme API'si.",
    },
    tech: ["C#", "ASP.NET Core", "Design Patterns", "SOLID"],
    github: "https://github.com/BerkeAlpaslan/pawmatch-api",
    featured: true,
  },
  {
    id: "sedna-reservation",
    title: "Sedna Reservation",
    description: {
      en: "Internship project at SednaCloud — a complete hotel reservation system with a .NET API backend and TypeScript CLI frontend.",
      tr: "SednaCloud staj projesi — .NET API backend ve TypeScript CLI frontend ile eksiksiz otel rezervasyon sistemi.",
    },
    tech: ["C#", "ASP.NET Core", "TypeScript", "REST API"],
    github: "https://github.com/BerkeAlpaslan/sedna-reservation-api",
    featured: true,
  },
  {
    id: "grpc-file-transfer",
    title: "gRPC File Transfer",
    description: {
      en: "File transfer implementation showcasing gRPC server and client streaming patterns for efficient binary data exchange.",
      tr: "Verimli binary veri alışverişi için gRPC server ve client streaming kalıplarını sergileyen dosya transferi implementasyonu.",
    },
    tech: ["C#", "gRPC", "Server Streaming", "Client Streaming"],
    github: "https://github.com/BerkeAlpaslan/grpc-file-transfer",
    featured: false,
  },
  {
    id: "rabbitmq-samples",
    title: "MassTransit + RabbitMQ",
    description: {
      en: "Sample project exploring message queue patterns with MassTransit and RabbitMQ, including different exchange types.",
      tr: "MassTransit ve RabbitMQ ile mesaj kuyruk kalıplarını keşfeden, farklı exchange türlerini içeren örnek proje.",
    },
    tech: ["C#", "MassTransit", "RabbitMQ", "Message Queue"],
    github: "https://github.com/BerkeAlpaslan/masstransit-rabbitmq-samples",
    featured: false,
  },
  {
    id: "ferry-tour",
    title: "Ferry Tour",
    description: {
      en: "Operating Systems course project implementing concurrent ferry scheduling using PThreads in C.",
      tr: "C dilinde PThreads kullanarak eşzamanlı feribot planlama uygulayan İşletim Sistemleri dersi projesi.",
    },
    tech: ["C", "PThreads", "Concurrency", "OS"],
    github: "https://github.com/BerkeAlpaslan/ferry-tour",
    featured: false,
  },
];
