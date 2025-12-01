export interface ExperienceItem {
  year: string;
  company: string;
  role?: string;
  description: string[];
}

export interface EducationItem {
  year: string;
  institution: string;
  course: string;
}

export interface CourseItem {
  name: string;
  provider?: string;
  year?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
}