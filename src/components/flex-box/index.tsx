import React from "react";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  justifyContent?: undefined | string;
  alignItems?: undefined | string;
  sx?: object;
};

export default ({ children, justifyContent, alignItems, sx }: Props) => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: justifyContent ?? "center",
      alignItems: alignItems ?? "center",
      flexGrow: 1,
      ...sx,
    }}
  >
    {children}
  </Box>
);
