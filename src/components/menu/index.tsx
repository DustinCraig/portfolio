import React from "react";
import { Stack, Box, useMediaQuery, Divider } from "@mui/material";
import FlexBox from "../flex-box";
import Title from "./components/title";
import Shortcuts from "./components/shortcuts";

export default () => {
  const isLarge = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  return (
    <Box sx={{ height: "100%", position: isLarge ? "fixed" : "relative" }}>
      <FlexBox
        sx={{
          color: "white",
          p: 8,
          pt: 0,
          pl: 5,
          pr: 0,
          pb: isLarge ? 8 : 0,
          height: "100%",
        }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack spacing={2} sx={{ height: "100%" }}>
          <Title />
          {isLarge && <Shortcuts />}
          {!isLarge && (
            <Box>
              <Divider />
            </Box>
          )}
        </Stack>
      </FlexBox>
    </Box>
  );
};
