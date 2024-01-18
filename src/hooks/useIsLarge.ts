import { useMediaQuery } from "@mui/material";

export default () => {
  const isLarge = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  return isLarge;
};
