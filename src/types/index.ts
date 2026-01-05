import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string | LucideIcon;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  contact: {
    email: string;
    socials: SocialLink[];
  };
}

export interface Skill {
  name: string;
  level?: number; // Optional 1-100
  icon?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  technologies: string[];
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  impact: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  image?: string;
}

export interface LeadershipMetric {
  label: string;
  value: string;
  description: string;
}
