import React from "react";
import useMenuContext from "../../../../hooks/use-menu-context";
import { Box, List, ListItem, Typography, Link } from "@mui/material";
import { ACCENT_COLOR } from "../../../../theme";
import { styled } from "@mui/material/styles";
import { MenuActionType } from "../../../../types/menu-types";

type ShortcutLinkProps = {
  active?: boolean;
};

export const ShortcutLink = styled(Link)(({ active }: ShortcutLinkProps) => ({
  color: "white",
  position: "relative",
  cursor: "pointer",
  "&:before": {
    content: "''",
    position: "absolute",
    display: "block",
    width: active ? "100%" : "0",
    height: "3px",
    bottom: "-3px",
    backgroundColor: `${ACCENT_COLOR}`,
    visibility: active ? "visible" : "hidden",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
}));

export default () => {
  const {
    state: { items, selectedItem },
    dispatch,
  } = useMenuContext();

  const setSelectedItem = (item: string) => {
    dispatch({ type: MenuActionType.SET_SELECTED_ITEM, value: item });
  };

  return (
    <Box>
      <List>
        {items.map((item, index) => (
          <ListItem sx={{ pb: 5, pl: 0 }} key={index}>
            <ShortcutLink
              onClick={() => setSelectedItem(item)}
              active={item === selectedItem}
              underline="none"
            >
              <Typography variant={"h5"}>{item}</Typography>
            </ShortcutLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
