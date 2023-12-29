export type Job = {
  companyName: string;
  startDate: string;
  endDate?: string | undefined;
  jobTitle: string;
  responsibilities: string[];
  technologies: string[];
};

export type ExperienceContextState = {
  jobs: Job[];
};
