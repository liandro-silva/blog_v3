import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import theme from "../../theme";
import Link from "next/link";
import { CustomNavbarLink } from "../index";

export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        borderBottomWidth: "1px",
        borderBottomColor: "grey.A700",
        borderBottomStyle: "solid",
        padding: theme.spacing(2),
        justifyContent: "center",
      }}
      elevation={0}
      enableColorOnDark
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <a
            style={{
              textDecoration: "none",
            }}
          >
            <Typography variant="h6" color="text.primary">
              Liandro Silva{" "}
              <small
                style={{
                  fontSize: theme.typography.fontSize,
                }}
              >
                @_devlee_
              </small>
            </Typography>
          </a>
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginRight: theme.spacing(2),
            }}
          >
            <CustomNavbarLink pathReference="/">Home</CustomNavbarLink>
            <CustomNavbarLink pathReference="/about">About</CustomNavbarLink>
            <CustomNavbarLink pathReference="/projects">
              Projects
            </CustomNavbarLink>
          </Box>
          <Button variant="contained" color="secondary" size="large">
            Folow me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
