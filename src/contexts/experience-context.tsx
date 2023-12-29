import React, { createContext } from "react";
import type { ExperienceContextState } from "../types/experience-types";

const initialState: ExperienceContextState = {
  jobs: [
    {
      companyName: "Atlassian",
      startDate: "Dec 2022",
      endDate: "Present",
      jobTitle:
        "Frontend Software Engineer - Confluence Cloud Enterprise Experience",
      responsibilities: [
        "Responsible for the frontend performance of Confluence Cloud. This includes optimizing React code, minimizing bundle sizes, implementing efficient code splits and making sure features are SSRd where applicable",
        "Developed, maintained, and shipped production code for the Confluence SSR service",
        "Delivered high-quality features to enterprise tenants",
      ],
      technologies: ["React.js", "Splunk", "Node", "Java", "SQL", "Terraform"],
    },
    {
      companyName: "Oculus Imaging",
      startDate: "May 2021",
      endDate: "Dec 2022",
      jobTitle: "Fullstack Software Engineer",
      responsibilities: [
        "Developed a mobile application to efficiently analyze angiographic images and perform 3D volume reconstruction",
        "Responsible for the development and the maintenance of the internal medical imaging web application. This involved shipping production code on both the backend and frontend as well as maintaining and scaling the infrastructure and databases",
      ],
      technologies: ["C#", "Azure", "React.js", "SQL", "React Native", "WebGL"],
    },
  ],
};

export const ExperienceContext = createContext<
  { state: ExperienceContextState } | undefined
>(undefined);

export function ExperienceContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ExperienceContext.Provider value={{ state: initialState }}>
      {children}
    </ExperienceContext.Provider>
  );
}
