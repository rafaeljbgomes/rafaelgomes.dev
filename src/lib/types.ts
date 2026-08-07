export interface Skill {
  name: string;
  category: "languages" | "backend" | "frontend" | "architecture" | "devops" | "security" | "quality";
}

export interface FocusArea {
  title: string;
  eyebrow: string;
  description: string;
  proof: string[];
  tools: string[];
}

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  focus: string;
  role: string;
  status: "research" | "completed" | "in-progress";
  year?: string;
  stack: string[];
  problem: string;
  contribution: string;
  decisions: string[];
  outcome: string;
  media: ProjectMedia[];
  githubUrl?: string;
  accent: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: "completed" | "in-progress";
  note?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  availability: string;
}

export interface ProfileHighlight {
  value: string;
  label: string;
  detail: string;
}
