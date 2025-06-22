import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Divider, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../auth/redux/reducer/loginReducer";
import { AuthDispatch } from "../../../../auth/redux/types/AuthDispatch";

export const MainMenuItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AuthDispatch>();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        height: "100%", // Full height inside Drawer
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto", overflowX: "hidden" }}>
        <List>
          <ListItemButton onClick={() => navigate("/home")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/upload")}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Video" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/my-videos")}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="My Videos" />
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <Divider />
        <ListItemButton onClick={handleLogoutClick}>
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "error.main" }} />
        </ListItemButton>
      </Box>
    </Box>
  );
};
