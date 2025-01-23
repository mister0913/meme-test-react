import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Twitter from "@mui/icons-material/Twitter";
import Telegram from "@mui/icons-material/Telegram";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
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
  // Media query to check if the screen width is small (mobile view)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <AppBar sx={{ width: 1, bgcolor: "white", boxShadow: "none" }}>
      <Toolbar
        sx={{
          justifyContent: isMobile ? "center" : "space-between", // Center items on mobile
          position: "relative", // Add relative positioning for mobile menu button
        }}
      >
        {isMobile && (
          // Menu Button (Positioned absolutely for alignment)
          <IconButton
            aria-label="menu"
            sx={{
              position: "absolute",
              left: 0, // Aligns the button to the left edge
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo (Centered on Mobile) */}
        <Box sx={{ width: 136, height: 32 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        {/* Desktop: Full Header */}
        {!isMobile && (
          <>
            {/* Search Box */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "grey" }} />
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
                  <KeyboardCommandKeyIcon
                    sx={{ width: 16, height: 16, color: "grey" }}
                  />
                  <Typography variant="body2" sx={{ color: "grey" }}>
                    K
                  </Typography>
                </Box>
              </SearchIconWrapper>
            </Search>

            {/* Actions */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Telegram">
                <Telegram />
              </IconButton>
              <IconButton aria-label="Desktop">
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
