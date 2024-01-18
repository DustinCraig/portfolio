import React from "react";
import useExperienceContext from "../../../hooks/use-experience-context";
import { Box, List, ListItem } from "@mui/material";
import JobModule from "./job";

export default () => {
  const {
    state: { jobs },
  } = useExperienceContext();

  return (
    <Box>
      <List sx={{ width: "100%" }}>
        {jobs.map((job) => (
          <ListItem sx={{ width: "100%" }}>
            <JobModule job={job} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
