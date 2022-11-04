import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { LeftSidebar } from "../LeftSidebar";
import LayoutStyle from "./style";
import { Container } from "@mui/system";
import Rightbar from "../Rightbar";

export const Layout = () => {
  const { navbar, sidebar, container, gridContainer } = LayoutStyle;

  return (
    <Container disableGutters sx={container}>
      <Grid container columns={12} sx={gridContainer}>
        <Grid item xs={0} md={1} sm={1} sx={navbar}>
          <LeftSidebar />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sm={10}
        >
          <Outlet />
        </Grid>
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={3}
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
