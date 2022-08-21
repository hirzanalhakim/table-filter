import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      style={{ height: "100vh" }}
    >
      <Typography align="center" color="textSecondary">
        Page Not Found
      </Typography>
    </Grid>
  );
};

export default NotFound;
