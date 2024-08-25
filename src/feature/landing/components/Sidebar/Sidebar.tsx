import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Divider, IconButton, Toolbar } from "@mui/material";
import { Drawer } from "./Sidebar.styled";

export type SidebarProps = {
  open: boolean;
  toggleDrawer: () => void;
};

export const Sidebar = ({ open, toggleDrawer }: SidebarProps) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
    </Drawer>
  );
};
