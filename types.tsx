
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
}
