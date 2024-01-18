import React from "react";
import { Typography, Box } from "@mui/material";
import type { Project } from "../../../../types/project-types";

type Props = {
  project: Project;
};

export default ({ project }: Props) => {
  return (
    <Box
      sx={{
        height: 200,
        border: `1px solid rgba(255,255,255,0.1)`,
        borderRadius: 0.5,
        p: 3,
      }}
    >
      <Typography color={"text.primary"} gutterBottom variant={"h5"}>
        {project.name}
      </Typography>
      <Typography color={"text.secondary"} variant="body2">
        {project.description}
      </Typography>
    </Box>
  );
};
