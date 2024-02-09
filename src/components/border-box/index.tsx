import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
  [x: string]: any;
};

const StyledBox = styled(Box)(() => ({
  border: `1px solid rgba(255,255,255,0.1)`,
  borderRadius: 0.5,
  p: 3,
}));

export default ({ children, ...rest }: Props) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
