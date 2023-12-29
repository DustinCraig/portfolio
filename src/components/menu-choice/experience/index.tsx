import React from "react";
import useExperienceContext from "../../../hooks/use-experience-context";
import { Box } from "@mui/material";
import JobModule from "./job";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default () => {
  const {
    state: { jobs },
  } = useExperienceContext();

  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
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
