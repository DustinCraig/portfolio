import React, { createContext } from "react";
import type { ProjectContextState } from "../types/project-types";

const initialState: ProjectContextState = {
  projects: [
    {
      name: "thegammonsreview",
      description: ["Custom movie review website."],
      technologies: ["HTML", "JavaScript", "Razor Pages", "ASP.NET"],
    },
    {
      name: "Paper in the Wind",
      description: ["Fly like a paper in the wind..."],
      technologies: ["Unity", "C#"],
    },
  ],
};

export const ProjectsContext = createContext<
  { state: ProjectContextState } | undefined
>(undefined);

export function ProjectsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProjectsContext.Provider value={{ state: initialState }}>
      {children}
    </ProjectsContext.Provider>
  );
}
