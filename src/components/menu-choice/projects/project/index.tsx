import React from "react";
import { Typography, Box } from "@mui/material";
import BorderBox from "../../../border-box";
import type { Project } from "../../../../types/project-types";

type Props = {
  project: Project;
};

export default ({ project }: Props) => {
  return (
    <BorderBox
      sx={{
        height: 200,
      }}
    >
      <Typography color={"text.primary"} gutterBottom variant={"h5"}>
        {project.name}
      </Typography>
      <Typography color={"text.secondary"} variant="body2">
        {project.description}
      </Typography>
    </BorderBox>
  );
};
