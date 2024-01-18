import React from "react";
import { Box } from "@mui/material";
import Layout from "./components/layout";
import { MenuContextProvider } from "./contexts/menu-context";
import { ExperienceContextProvider } from "./contexts/experience-context";
import { ProjectsContextProvider } from "./contexts/projects-context";
import Menu from "./components/menu";
import MenuChoice from "./components/menu-choice";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
//@ts-ignore
import Image from "./assets/images/Landing.png";

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <ProjectsContextProvider>
        <ExperienceContextProvider>
          <MenuContextProvider>
            <Box
              sx={{
                background: `linear-gradient(90deg, rgba(2,0,36,0.8) 0%, rgba(9,9,121,0.8) 0%, rgba(0,0,0,0.8) 0%), url(${Image}) no-repeat center center fixed`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100vh",
                width: "100vw",
                position: "fixed",
              }}
            />
            <Box
              sx={{
                pt: 5,
              }}
            >
              <Layout layoutLeft={<Menu />} layoutRight={<MenuChoice />} />
            </Box>
          </MenuContextProvider>
        </ExperienceContextProvider>
      </ProjectsContextProvider>
    </ThemeProvider>
  );
};
