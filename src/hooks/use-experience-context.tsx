import { useContext } from "react";
import { ExperienceContext } from "../contexts/experience-context";

export default function () {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error(
      "useExperienceContext must be used within a ExperienceContextProvider"
    );
  }
  return context;
}
