import React from "react";

import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Anchor, useFragmentStack } from "./contex";
import theme from "@theme";
import Link from "next/link";

export const FragmentStack: React.FC = () => {
  const { fragmentStack, setFragmentStack } = useFragmentStack();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setFragmentStack({
        open,
        render: null,
        anchor,
      });
    };

  return (
    <>
      <Drawer
        anchor={fragmentStack.anchor}
        open={fragmentStack.open}
        onClose={toggleDrawer(fragmentStack.anchor, false)}
        onKeyDown={toggleDrawer(fragmentStack.anchor, false)}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            minHeight:
              fragmentStack.anchor === "bottom" ? "calc(100vh - 30vh)" : "100%",
            margin: "0 auto",
            width: fragmentStack.anchor === "bottom" ? "100%" : { xs: "100vw" },
            py: fragmentStack.anchor === "bottom" ? 5 : 0,
            paddingLeft: fragmentStack.anchor === "bottom" ? 2 : 0,
            paddingRight: fragmentStack.anchor === "bottom" ? 2 : 0,
            background: theme.palette.primary.main,
          }}
          role="presentation"
        >
          {fragmentStack.anchor === "left" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: theme.spacing(2),
                  boxShadow: 2,
                  background: theme.palette.primary.main,
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                }}
                boxShadow={3}
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
                <IconButton
                  size="large"
                  aria-label="close menu"
                  onClick={() =>
                    setFragmentStack({
                      open: false,
                      render: null,
                      anchor: "left",
                    })
                  }
                >
                  <Close />
                </IconButton>
              </Box>
              <Divider />
            </>
          )}
          {fragmentStack.render}
        </Box>
      </Drawer>
    </>
  );
};
