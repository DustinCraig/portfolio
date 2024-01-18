import React from "react";
import { Box, Stack } from "@mui/material";
import ProjectModule from "./project";
import useProjectsContext from "../../../hooks/use-projects-context";

export default () => {
  const {
    state: { projects },
  } = useProjectsContext();

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction={"column"} sx={{ width: "100%" }} spacing={5}>
        {projects.map((project) => (
          <Box sx={{ width: "100%" }}>
            <ProjectModule project={project} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
