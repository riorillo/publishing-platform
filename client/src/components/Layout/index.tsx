import { Outlet } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { LeftSidebar } from "../LeftSidebar";
import LayoutStyle from "./style";
import { Container } from "@mui/system";

export const Layout = () => {
  return (
    // <Container sx={{maxWidth: '100vw'}}>
    <Container disableGutters sx={{maxWidth: '1500px', ['@media (min-width: 1200px)']: { maxWidth: '1500px'}}}>
      <Grid
        container
        columns={12}
        sx={{ minHeight: "100%", maxWidth: '1500px'}}
      >
        <Grid item xs={0.75} sx={LayoutStyle.navbar}>
          <LeftSidebar />
        </Grid>

        <Grid item xs={8}>
          <Outlet />
        </Grid>

        <Grid item xs={3.25} sx={LayoutStyle.sidebar}>
          <Box sx={{ border: "3px solid black", p: 2 }}>
            <Typography>
              ⚠️ W.I.P. ⚠️ <br /> There will be a sidebar soon!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
