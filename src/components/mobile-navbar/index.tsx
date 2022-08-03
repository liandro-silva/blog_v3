import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Link from "next/link";

import theme from "@theme";
import { useFragmentStack } from "../fragment-stack/contex";
import { Navigation } from "./components/navigations";

export const MobileNavbar: React.FC = () => {
  const { setFragmentStack } = useFragmentStack();
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        borderBottomWidth: "1px",
        borderBottomColor: "grey.A700",
        borderBottomStyle: "solid",
        padding: theme.spacing(1),
        justifyContent: "center",
        display: { xs: "block", md: "none", sm: "block" },
      }}
      elevation={1}
      enableColorOnDark
    >
      <Toolbar
        sx={{
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
        <Tooltip title="Open navbar">
          <IconButton
            aria-label="menu"
            size="large"
            onClick={() =>
              setFragmentStack({
                open: true,
                render: <Navigation />,
                anchor: "left",
              })
            }
          >
            <Menu />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
