import { useContext } from "react";
import { ProjectsContext } from "../contexts/projects-context";

export default function () {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error(
      "useProjectsContext must be used within a ProjectsContextProvider"
    );
  }
  return context;
}
