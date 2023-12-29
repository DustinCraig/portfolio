import React, { useState, useEffect, ReactNode } from "react";
import { Box, useMediaQuery, Typography } from "@mui/material";
import { MenuItem } from "../../types/menu-types";
import { ACCENT_COLOR } from "../../theme";
import FlexBox from "../flex-box";
import Experience from "./experience";
import useMenuContext from "../../hooks/use-menu-context";

export default () => {
  const {
    state: { selectedItem },
  } = useMenuContext();
  const isLarge = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
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

  return (
    <Box
      sx={{ position: "relative", p: 8, pt: 0, height: "100%", pr: 1, pl: 0 }}
    >
      {isLarge && <FlexBox>{menuNode}</FlexBox>}
      {!isLarge && (
        <>
          <Typography
            sx={{
              p: 5,
              pb: 0,
              pt: 0,
              textDecoration: "underline",
              textDecorationColor: `${ACCENT_COLOR}`,
              color: "white",
            }}
            variant="h5"
          >
            Experience
          </Typography>
          <Experience />
        </>
      )}
    </Box>
  );
};
