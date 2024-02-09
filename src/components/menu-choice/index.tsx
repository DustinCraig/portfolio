import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { MenuItem } from "../../types/menu-types";
import { ACCENT_COLOR } from "../../theme";
import Experience from "./experience";
import About from "./about";
import useIsLarge from "../../hooks/useIsLarge";
import Projects from "./projects";
import useMenuContext from "../../hooks/use-menu-context";

export default () => {
  const {
    state: { selectedItem },
  } = useMenuContext();
  const isLarge = useIsLarge();
  const [menuNode, setMenuNode] = useState<ReactNode | undefined>(undefined);

  useEffect(() => {
    switch (selectedItem) {
      case MenuItem.EXPERIENCE: {
        return setMenuNode(Experience);
      }
      default: {
      }
    }
  }, [selectedItem]);

  const getNodeFromMenuItem = (selectedItem: string) => {
    switch (selectedItem) {
      case MenuItem.EXPERIENCE: {
        return <Experience />;
      }
      case MenuItem.PROJECTS: {
        return <Projects />;
      }
      case MenuItem.ABOUT: {
        return <About />;
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <Box
      sx={{ position: "relative", p: 8, pt: 1, height: "100%", pr: 1, pl: 0 }}
    >
      {Object.values(MenuItem)
        .filter((item) => typeof item === "string")
        .map((item) => (
          <>
            <Typography
              sx={{
                p: 5,
                pb: 0,
                pt: 0,
                pl: isLarge ? 3 : 5,
                pr: 0,
                textDecoration: "underline",
                textDecorationColor: `${ACCENT_COLOR}`,
                color: "white",
              }}
              variant="h4"
            >
              {item}
            </Typography>
            <Box sx={{ p: 1, pt: 0 }}>{getNodeFromMenuItem(item)}</Box>
          </>
        ))}
    </Box>
  );
};
