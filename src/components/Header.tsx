import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import Twitter from "@mui/icons-material/Twitter";
import Telegram from "@mui/icons-material/Telegram";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";

const Search = styled("div")(({ theme }) => ({
  display: "flex", // Added flex display for horizontal layout
  alignItems: "center",
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.common.black, 0.03),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.02),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 350,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex", // Ensure icons are horizontally aligned
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1, // Allow the input to take up the remaining space
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 0,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function Header() {
  return (
    <AppBar color="default" sx={{ width: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ width: 136, height: 32, position: "relative" }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        {/* Search Box */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search ai agents..."
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <Box
              display="flex"
              alignItems="center"
              bgcolor={(theme) => alpha(theme.palette.common.white, 0.7)}
              borderRadius={2}
              px={0.5}
              gap={0.5}
            >
              <KeyboardCommandKeyIcon sx={{ width: 16, height: 16 }} />
              <Typography variant="body2">K</Typography>
            </Box>
          </SearchIconWrapper>
        </Search>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" aria-label="Telegram">
            <Telegram />
          </IconButton>
          <IconButton color="inherit" aria-label="Desktop">
            <DesktopMacOutlinedIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              textTransform: "none",
              backgroundColor: "black",
              color: "white",
              letterSpacing: "0.1em",
            }}
          >
            Start Buying
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
