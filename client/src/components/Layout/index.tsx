import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { LeftSidebar } from "../LeftSidebar";
import LayoutStyle from "./style";
import { Container } from "@mui/system";
import Rightbar from "../Rightbar";
import { useEffect } from "react";

export const Layout = () => {
  const { navbar, sidebar, container, gridContainer } = LayoutStyle;



  return (
    <Container disableGutters sx={container}>
      <Grid container columns={12} sx={gridContainer}>
        <Grid item xs={0.75} sx={navbar}>
          <LeftSidebar />
        </Grid>

        <Grid item xs={8}>
          <Outlet />
        </Grid>

        <Grid
          item
          xs={3.25}
          sx={{
            sidebar,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Rightbar />
        </Grid>
      </Grid>
    </Container>
  );
};
