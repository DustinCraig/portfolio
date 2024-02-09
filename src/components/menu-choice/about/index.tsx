import React from "react";
import Avatar from "./avatar";
import { Box, Stack, Typography } from "@mui/material";

export default () => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack
        spacing={5}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Stack spacing={1} direction={"column"}>
            <Typography color="white">
              <b>Hi!</b> I'm Dustin, a dedicated Software Engineer with a huge
              passion for coding 🚀 <br />
            </Typography>
            <Typography color="text.secondary" variant="h6">
              Who Am I?
            </Typography>
            <Typography color="white">
              All around tech enthusiast who finds joy in crafting solutions
              through programming and system design. When I'm not on my
              computer, I enjoy playing table top games and starting (sometimes
              completing) projects around my house.
            </Typography>
          </Stack>
        </Box>
        <Avatar />
      </Stack>
      <Stack direction={"column"}>
        <Typography color="text.secondary" variant="h6">
          Why Code?
        </Typography>
        <Typography color="white">
          At 12 years old, while playing a video game, a sudden wave of
          curiosity swept over me. I thought: "how is all of this working"? From
          that moment on, I've never looked back. Coding is not just a
          profession for me; it's become a way of life. Having the ability to
          bring ideas to life with just a computer is and has always been
          mind-blowing to me. Whether it's optimizing performance, conquering
          complex challenges, or building seamless user experiences, I find
          immense satisfaction in transforming concepts into reality with just
          key strokes.
        </Typography>
      </Stack>
    </Box>
  );
};
