import React from "react";
import { Stack, Typography } from "@mui/material";

export default () => (
  <Stack direction={"column"} spacing={1}>
    <Typography variant="h2" sx={{ fontWeight: "700" }}>
      Dustin Craig
    </Typography>
    <Typography variant="h5" sx={{ fontWeight: "600" }}>
      Software Engineer
    </Typography>
    <Typography
      color={"text.secondary"}
      variant="caption"
      sx={{ fontWeight: "500", fontSize: "1rem" }}
    >
      Passionate about building high quality products
    </Typography>
  </Stack>
);
