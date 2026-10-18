export type SkillCategory = {
  key: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "backend",
    items: ["C#", "ASP.NET Core", "Entity Framework", "REST API", "gRPC", "SignalR", "Rust"],
  },
  {
    key: "architecture",
    items: ["Clean Architecture", "Onion Architecture", "Repository Pattern", "Mediator / CQRS", "Result Pattern", "SOLID Principles", "Domain-Driven Design"],
  },
  {
    key: "devops",
    items: ["Docker", "Linux", "Git", "CI/CD", "Docker Swarm", "GitHub Actions"],
  },
  {
    key: "networking",
    items: ["TCP/UDP", "OSI Model", "Socket Programming", "DNS"],
  },
  {
    key: "tools",
    items: ["PostgreSQL", "SQL Server", "Redis", "RabbitMQ", "Liquibase", "Visual Studio", "VS Code", "Postman"],
  },
  {
    key: "learning",
    items: ["Kubernetes", "AWS", "Microservices"],
  },
];
