import { Tech } from '@/app/data/tech-stack';

export interface CVPage {
  id: string;
  about?: About;
  experienceTitle?: string;
  workExperience: WorkExperience[];
}

export interface About {
  title: string;
  educationTitle: string;
  info: { label: string; value: string }[];
  intro: string;
}

export interface WorkExperience {
  title: string;
  date: string;
  techStack: Tech[];
  description: string;
  activities: string[];
}

