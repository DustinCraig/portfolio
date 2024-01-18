import React from "react";
import {
  Box,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Stack,
} from "@mui/material";
import type { Job } from "../../../../types/experience-types";

type Props = {
  job: Job;
};

export default ({ job }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <CardContent sx={{ pt: 0 }}>
        <Typography color={"text.primary"} variant={"h5"}>
          {job.companyName}
        </Typography>
        <Typography color={"text.secondary"}>{job.jobTitle}</Typography>
        <Typography color={"text.secondary"}>
          {job.startDate} - {job.endDate}
        </Typography>
        <Typography variant={"body2"}>
          <List>
            {job.responsibilities.map((r) => (
              <ListItem style={{ color: "white" }}>
                <ListItemText>
                  <Typography color={"text.primary"}>{r}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Typography>
        <Stack direction={"row"} spacing={1}>
          {job.technologies.map((tech) => (
            <Chip label={`${tech}`} color={"primary"} variant={"outlined"} />
          ))}
        </Stack>
      </CardContent>
    </Box>
  );
};
