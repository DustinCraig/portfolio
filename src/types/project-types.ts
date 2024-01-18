export type Project = {
  name: string;
  description: string[];
  technologies: string[];
  liveLink?: string;
  sourceCodeLink?: string;
};

export type ProjectContextState = {
  projects: Project[];
};
