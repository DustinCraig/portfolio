import React, { ReactNode } from "react";
import { Grid, Box } from "@mui/material";
import FlexBox from "../flex-box";

type Props = {
  layoutLeft: ReactNode;
  layoutRight: ReactNode;
};

export default ({ layoutLeft, layoutRight }: Props) => {
  return (
    <FlexBox>
      <FlexBox
        sx={{
          p: 10,
          pt: 0,
          pb: 0,
          maxWidth: "1440px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Grid container spacing={1} direction={"row"}>
          <Grid item xs={12} lg={5}>
            {layoutLeft}
          </Grid>
          <Grid item xs={12} lg={7}>
            {layoutRight}
          </Grid>
        </Grid>
      </FlexBox>
    </FlexBox>
  );
};
