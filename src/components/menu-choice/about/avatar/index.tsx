import React from "react";
// @ts-expect-error
import AvatarImage from "../../../../assets/images/Avatar.jpeg";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(30),
}));

export default () => {
  return <StyledAvatar alt="Dustin Craig" src={AvatarImage} />;
};
