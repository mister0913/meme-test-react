import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import { useMediaQuery } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CustomTypograph = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 500,
  color: "black",
}));

const LightTypograph = styled(Typography)(() => ({
  fontWeight: 400,
  color: "black",
}));

const BoldText = styled(Typography)(() => ({
  fontWeight: 700,
  color: "black",
  lineHeight: 1,
}));

export default function Page1View() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Grid container spacing={isMobile ? 4 : 3} px={isMobile ? 3 : 0}>
      <Grid size={{ md: 8, xs: 12 }}>
        <Stack alignItems={isMobile ? "center" : "flex-start"}>
          <BoldText fontSize={isMobile ? 40 : 70}>Buy Memes.</BoldText>
          <BoldText fontSize={isMobile ? 40 : 70}>In Two Clicks.</BoldText>
          <LightTypograph fontSize={isMobile ? 13 : 24} mt={1}>
            The fastest way to buy memes in just two clicks.
          </LightTypograph>
          <LightTypograph fontSize={isMobile ? 13 : 24}>
            Under 1 minute to sign up and no wallet needed.
          </LightTypograph>
          {!isMobile && (
            <Box display="flex" gap={2} width={1} mt={3}>
              <Stack
                spacing={1}
                width="45%"
                p={2}
                borderRadius={4}
                bgcolor={(theme) => alpha(theme.palette.common.black, 0.03)}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <FiberManualRecordIcon
                    sx={{ width: 12, height: 12, color: "#22C55E" }}
                  />
                  <Typography>Total Users</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      position: "relative",
                      width: "70px",
                      height: "24px", // Adjust height as needed
                    }}
                  >
                    <Box
                      component="img"
                      src="/person1.png"
                      alt="Image 1"
                      sx={{
                        width: "24px", // Adjust width as needed
                        position: "absolute",
                        left: "0",
                        zIndex: 1,
                        border: "2px solid black",
                        borderRadius: 50,
                      }}
                    />
                    <Box
                      component="img"
                      src="/person2.png"
                      alt="Image 2"
                      sx={{
                        width: "24px", // Adjust width as needed
                        position: "absolute",
                        left: "20%", // Move 1/3 to the right
                        zIndex: 2,
                        border: "2px solid black",
                        borderRadius: 50,
                      }}
                    />
                    <Box
                      component="img"
                      src="/person3.png"
                      alt="Image 3"
                      sx={{
                        width: "24px", // Adjust width as needed
                        position: "absolute",
                        left: "40%", // Move 2/3 to the right
                        zIndex: 3,
                        border: "2px solid black",
                        borderRadius: 50,
                      }}
                    />
                  </Box>
                  <CustomTypograph>52,630</CustomTypograph>
                </Box>
              </Stack>

              <Stack
                width="45%"
                spacing={1}
                p={2}
                borderRadius={4}
                bgcolor={(theme) => alpha(theme.palette.common.black, 0.03)}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <FiberManualRecordIcon
                    sx={{ width: 12, height: 12, color: "#22C55E" }}
                  />
                  <Typography>Trade volume</Typography>
                </Box>
                <CustomTypograph>$1,288,314,266</CustomTypograph>
              </Stack>
            </Box>
          )}
        </Stack>
      </Grid>
      <Grid size={{ md: 4, xs: 12 }}>
        <Stack width={1} boxShadow={2} borderRadius={3}>
          <Box component="img" src="/container.png" alt="container" />
          <Grid
            container
            sx={{ bgcolor: "white", borderRadius: "0 0 12px 12px" }}
          >
            <Grid size={{ md: 6, xs: 6 }}>
              <Stack p={2}>
                <Typography fontSize={20} fontWeight="bold" color="black">
                  VIRTUAL
                </Typography>
                <Stack pt={1}>
                  <Typography fontSize={13} lineHeight={1}>
                    Price
                  </Typography>
                  <Typography fontSize={14} fontWeight="bold">
                    $2.74
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
              <Stack p={2}>
                <Box display="flex" alignItems="center" gap={1} height={30}>
                  <Box
                    component="img"
                    src="/triangle.png"
                    alt="triangle"
                    width={16}
                    height={16}
                  />
                  <Typography fontSize={16} fontWeight="bold" color="#22C55E">
                    0.59%
                  </Typography>
                </Box>
                <Stack pt={1}>
                  <Typography fontSize={13} lineHeight={1}>
                    Market Cap
                  </Typography>
                  <Typography fontSize={14} fontWeight="bold">
                    $1.7B
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
