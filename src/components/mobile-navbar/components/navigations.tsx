import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import theme from "@theme";
import React from "react";
import { useFragmentStack } from "src/components/fragment-stack/contex";

export const Navigation: React.FC = () => {
  const { setFragmentStack } = useFragmentStack();
  return (
    <Box>
      <nav aria-label="main pages">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setFragmentStack({
                  open: false,
                  render: null,
                  anchor: "left",
                });
              }}
            >
              <ListItemText
                primary={<Typography variant="body2">HOME</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setFragmentStack({
                  open: false,
                  render: null,
                  anchor: "left",
                });
              }}
            >
              <ListItemText
                primary={<Typography variant="body2">ABOUT</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setFragmentStack({
                  open: false,
                  render: null,
                  anchor: "left",
                });
              }}
            >
              <ListItemText
                primary={<Typography variant="body2">PROJECTS</Typography>}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Box
        sx={{
          padding: theme.spacing(1),
          mt: 1,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            setFragmentStack({
              open: false,
              render: null,
              anchor: "left",
            });
          }}
        >
          Follow me
        </Button>
      </Box>
    </Box>
  );
};
