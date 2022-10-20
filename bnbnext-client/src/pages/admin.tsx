import React from "react";
import { GlobalStyles } from "@mui/system";
import { CssVarsProvider } from "@mui/joy";
import type { Theme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import IconButton from "@mui/joy/IconButton";

// Icons import
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuIcon from "@mui/icons-material/Menu";
import BookRoundedIcon from "@mui/icons-material/BookRounded";

// custom
import * as Layout from "../components/Layout";
import Navigation from "../components/admin/Navigation";
import Users from "../components/admin/ Users";

const Admin = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles<Theme>
        styles={(theme) => ({
          body: {
            margin: 0,
            fontFamily: theme.vars.fontFamily.body,
          },
        })}
      />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: "100vh",
            overflow: "hidden",
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="solid"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              <MailRoundedIcon />
            </IconButton>
            <Typography component="h1" fontWeight="xl">
              BuyandBelieve
            </Typography>
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.SidePane>
          <Box
            sx={{
              p: 2,
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: ".1rem",
              }}
            >
              Unread
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{ "--IconButton-size": "24px" }}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Users />
        </Layout.SidePane>
        <Layout.Main></Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
};

export default Admin;
