import {
  ContactInfo,
  Education,
  Experience,
  FocusArea,
  PersonalInfo,
  ProfileHighlight,
  Project,
  Skill,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Rafael Gomes",
  title: "Junior Backend Engineer",
  subtitle: "Backend Engineering & DevOps Delivery",
  description:
    "I build backend services and reliable delivery workflows, with practical experience in APIs, data persistence, containers, CI/CD, and distributed-system design.",
  location: "Arouca / Porto, Portugal",
  availability: "Open to junior Backend Engineering, DevOps, Platform Engineering, and Secure Software roles",
};

export const profileHighlights: ProfileHighlight[] = [
  {
    value: "Backend",
    label: "Service design",
    detail: "APIs, domain logic, persistence, and dependable service integrations.",
  },
  {
    value: "DevOps",
    label: "Delivery discipline",
    detail: "Containers, CI/CD, automated checks, and repeatable deployment workflows.",
  },
  {
    value: "Systems",
    label: "Architecture thinking",
    detail: "Service boundaries and technical trade-offs that support reliable change.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Backend engineering",
    eyebrow: "Service foundations",
    description:
      "Building maintainable APIs and service layers with clear domain logic, persistence, and integration contracts.",
    proof: [
      "Built Spring Boot and Django REST backends with explicit domain and service layers.",
      "Worked with relational and document databases in product and research projects.",
      "Focuses on clear contracts, testable business logic, and dependable integrations.",
    ],
    tools: ["Java", "Spring Boot", "Django REST", "Node.js", "PostgreSQL", "RabbitMQ"],
  },
  {
    title: "DevOps delivery",
    eyebrow: "From code to runtime",
    description:
      "Making software easier to build, validate, and deploy through containers, automated checks, and repeatable delivery workflows.",
    proof: [
      "Configured Docker and Docker Swarm deployment workflows for distributed services.",
      "Built Jenkins and GitHub Actions pipelines for automated validation.",
      "Uses automation to make changes safer, repeatable, and easier to review.",
    ],
    tools: ["Docker", "Docker Swarm", "Jenkins", "GitHub Actions", "Maven", "pytest"],
  },
  {
    title: "Architecture decisions",
    eyebrow: "Systems clarity",
    description:
      "Designing service boundaries and integration patterns with explicit trade-offs for maintainability and reliability.",
    proof: [
      "Applied ADD, DDD, and clean-architecture practices to guide system decomposition.",
      "Worked with message-driven coordination and SAGA-style distributed flows.",
      "Connects architectural choices to reliability, delivery, and maintainability.",
    ],
    tools: ["Microservices", "ADD", "DDD", "SAGA", "Clean Architecture", "STRIDE"],
  },
];

export const skills: Skill[] = [
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "Spring Boot", category: "backend" },
  { name: "Django REST Framework", category: "backend" },
  { name: "Node.js / Express", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Microservices", category: "architecture" },
  { name: "Event-driven architecture", category: "architecture" },
  { name: "Clean Architecture", category: "architecture" },
  { name: "DDD", category: "architecture" },
  { name: "ADD", category: "architecture" },
  { name: "Docker", category: "devops" },
  { name: "Docker Compose", category: "devops" },
  { name: "Docker Swarm", category: "devops" },
  { name: "Jenkins", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "Ansible", category: "devops" },
  { name: "WebAssembly sandboxing", category: "security" },
  { name: "npm supply-chain security", category: "security" },
  { name: "JWT / OAuth", category: "security" },
  { name: "STRIDE", category: "security" },
  { name: "OWASP ASVS", category: "security" },
  { name: "JMeter", category: "quality" },
  { name: "k6", category: "quality" },
  { name: "Vitest", category: "quality" },
  { name: "Mocha / Chai / Sinon", category: "quality" },
  { name: "pytest", category: "quality" },
];

export const projects: Project[] = [
  {
    id: "microservices-reengineering",
    title: "Microservices Reengineering Platform",
    summary:
      "Reengineered a monolithic application into a service-oriented platform with explicit boundaries, asynchronous coordination, and automated delivery.",
    focus: "Architecture / Backend / DevOps",
    role: "Backend & DevOps Engineer",
    status: "completed",
    year: "2024",
    stack: ["Java", "Spring Boot", "RabbitMQ", "Docker Swarm", "Jenkins", "CI/CD"],
    problem:
      "A monolithic application needed clearer domain ownership, safer cross-service coordination, and a repeatable way to deploy distributed changes.",
    contribution:
      "I contributed to the service decomposition, implemented backend coordination patterns, and configured containerized delivery with Docker Swarm and Jenkins.",
    decisions: [
      "Applied Attribute-Driven Design to make service-boundary decisions explicit.",
      "Used RabbitMQ and SAGA-style coordination for cross-service consistency.",
      "Separated deployment concerns through container images and automated pipeline stages.",
    ],
    outcome:
      "Produced a working service-oriented platform with clearer domain boundaries, asynchronous coordination, and an automated deployment path.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
        alt: "Abstract visual representing distributed services and deployment flow.",
      },
    ],
    accent: "01",
  },
  {
    id: "diabetes-literacy-assistant",
    title: "Diabetes Literacy Assistant",
    summary:
      "Built backend and delivery foundations for a patient-facing diabetes platform with Django REST, secure authentication, and a React interface.",
    focus: "Full-stack health-tech product",
    role: "Backend, Integration & CI Engineer",
    status: "completed",
    year: "2024",
    stack: ["Django REST", "React", "TypeScript", "PostgreSQL", "Docker", "GitHub Actions"],
    problem:
      "The product needed to support diabetes-related tracking, guidance, and AI-assisted interactions while maintaining an accessible, structured user experience.",
    contribution:
      "I worked on backend service layers, JWT authentication, AI-assistant integration, and automated validation with GitHub Actions.",
    decisions: [
      "Separated REST APIs from persistence through domain models, service layers, and repositories.",
      "Implemented token-based authentication and prompt auditing around the AI assistant.",
      "Configured automated unit and integration checks for the delivery workflow.",
    ],
    outcome:
      "Delivered a structured backend foundation and automated validation workflow that supported safer iteration on the health-tech product.",
    media: [
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
        alt: "Health-tech visual representing a patient-facing diabetes platform.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
        alt: "Health-tech visual representing patient-facing product workflows.",
      },
    ],
    accent: "02",
  },
  {
    id: "wasm-sandbox",
    title: "WebAssembly npm Sandbox Plugin",
    summary:
      "Developing a Webpack plugin that isolates selected third-party npm dependencies in a WebAssembly-backed JavaScript sandbox.",
    focus: "Master's dissertation / Security tooling",
    role: "Security Tooling & Research Engineer",
    status: "in-progress",
    year: "2025-2026",
    stack: ["TypeScript", "Webpack", "WebAssembly", "QuickJS", "JavaScript Security"],
    problem:
      "Browser applications rely on third-party npm packages that can execute with broad ambient capabilities, creating supply-chain risk.",
    contribution:
      "I built the Webpack integration, sandbox execution bridge, policy experiments, and performance-measurement workflow used to evaluate the approach.",
    decisions: [
      "Used QuickJS compiled to WebAssembly to isolate dependency execution.",
      "Built a JSON-RPC-style bridge between host code and sandboxed execution.",
      "Measured runtime overhead and compatibility constraints as part of the evaluation.",
    ],
    outcome:
      "The ongoing dissertation provides a working isolation mechanism and evidence on the compatibility and performance trade-offs involved.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
        alt: "Abstract visual representing WebAssembly sandboxing and security evaluation.",
      },
    ],
    githubUrl: "https://github.com/RafaelGomes1211426/webpack-wasm-sandbox-plugin",
    accent: "03",
  },
  {
    id: "mas-manager",
    title: "MAS Manager",
    summary:
      "Developed a research prototype for monitoring and coordinating distributed multi-agent systems through a centralized web interface.",
    focus: "GECAD research prototype",
    role: "Research Software Engineer",
    status: "completed",
    year: "2024",
    stack: ["Python", "Java", "Vue.js", "MongoDB", "JADE", "PEAK/SPADE"],
    problem:
      "Research teams needed a practical way to visualize and coordinate heterogeneous multi-agent systems operating across different frameworks.",
    contribution:
      "I implemented web-interface flows and communication bridges between agent frameworks, supporting lifecycle and transport-protocol experiments.",
    decisions: [
      "Bridged JADE and PEAK/SPADE through HTTP Message Transport Protocol experiments.",
      "Used Python, Java, and Vue.js to connect research models to an operational control surface.",
      "Documented technical behaviour and experimental findings for academic evaluation.",
    ],
    outcome:
      "Delivered a working management interface for the research prototype; the project received an 18/20 evaluation.",
    media: [
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        alt: "Abstract visual representing a distributed multi-agent management interface.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        alt: "Abstract visual representing a multi-agent system topology.",
      },
    ],
    githubUrl: "https://github.com/RafaelGomes1211426/MASManager",
    accent: "04",
  },
];

export const experiences: Experience[] = [
  {
    id: "gecad-researcher",
    role: "Research Software Engineer",
    company: "GECAD",
    period: "Feb 2024 - Jun 2024",
    location: "Porto, Portugal",
    description:
      "Built research software for monitoring and coordinating distributed multi-agent systems.",
    highlights: [
      "Designed communication layers that bridged agent platforms using HTTP Message Transport Protocols.",
      "Built a dynamic Vue.js control panel backed by Python and Java services.",
      "Contributed to an applied research project evaluated at 18/20.",
    ],
    technologies: ["Python", "Java", "Vue.js", "Multi-agent systems", "Research prototype"],
  },
  {
    id: "nei-isep",
    role: "Technical Events & Community Collaborator",
    company: "NEI-ISEP",
    period: "Oct 2021 - Present",
    location: "Porto, Portugal",
    description:
      "Supported the ISEP informatics-engineering community through technical events, student outreach, and peer collaboration.",
    highlights: [
      "Coordinated logistics and student outreach for technical workshops and networking sessions.",
      "Supported a collaborative technical community through events and peer assistance.",
      "Contributed student perspective to organization planning and community initiatives.",
    ],
    technologies: ["Community Leadership", "Event Coordination", "Technical Workshops", "Teamwork"],
  },
];

export const education: Education[] = [
  {
    id: "masters-software-engineering",
    degree: "Master's Degree",
    field: "Software Engineering",
    institution: "Instituto Superior de Engenharia do Porto",
    period: "Sep 2024 - Present",
    status: "in-progress",
    note: "Dissertation: WebAssembly-based isolation mechanisms for mitigating JavaScript and npm supply-chain attacks.",
  },
  {
    id: "bachelors-informatics-engineering",
    degree: "Bachelor's Degree",
    field: "Informatics Engineering",
    institution: "Instituto Superior de Engenharia do Porto",
    period: "Oct 2021 - Jul 2024",
    status: "completed",
    note: "Final Project: 18/20. Relevant foundations in computer networks and computer systems.",
  },
];

export const contactInfo: ContactInfo = {
  email: "rafaelgomes1973@gmail.com",
  phone: "+351 914 684 794",
  location: "Arouca / Porto, Portugal",
  linkedin: "https://linkedin.com/in/rafael-gomes-42316928b",
  github: "https://github.com/RafaelGomes1211426",
};
