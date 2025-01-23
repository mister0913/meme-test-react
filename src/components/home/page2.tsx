import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

export default function Page2View() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Stack height={370}>
      <Typography fontSize={32} fontWeight={700} color="black">
        {isMobile ? "Trending" : "Hottest"}
      </Typography>
      <Swiper
        slidesPerView={isMobile ? 1.5 : 4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="customSwiper"
      >
        <SwiperSlide>
          <Stack width={1} boxShadow={2} borderRadius={3}>
            <Box
              component="img"
              src="/img1.png"
              width={1}
              height={180}
              alt="container"
              sx={{
                borderRadius: "12px 12px 0 0",
                objectFit: "none",
                objectPosition: "top left",
              }}
            />

            <Grid
              container
              sx={{ bgcolor: "white", borderRadius: "0 0 12px 12px" }}
            >
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Typography fontSize={14} fontWeight="bold" color="black">
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
                  <Box display="flex" alignItems="center" gap={1} height={21}>
                    <Box
                      component="img"
                      src="/triangle.png"
                      alt="triangle"
                      width={16}
                      height={16}
                    />
                    <Typography fontSize={14} fontWeight="bold" color="#22C55E">
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
        </SwiperSlide>

        <SwiperSlide>
          <Stack width={1} boxShadow={2} borderRadius={3}>
            <Box
              component="img"
              src="/img2.png"
              height={180}
              alt="container"
              sx={{
                borderRadius: "12px 12px 0 0",
                objectFit: "none",
                objectPosition: "top left",
              }}
            />

            <Grid
              container
              sx={{ bgcolor: "white", borderRadius: "0 0 12px 12px" }}
            >
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Box display="flex" alignItems="center">
                    <Typography fontSize={14} fontWeight="bold" color="black">
                      AI16Z
                    </Typography>
                    <Box
                      component="img"
                      src="/mark.png"
                      width={20}
                      alt="mark"
                    />
                  </Box>
                  <Stack pt={1}>
                    <Typography fontSize={13} lineHeight={1}>
                      Price
                    </Typography>
                    <Typography fontSize={14} fontWeight="bold">
                      $0.0873
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Box display="flex" alignItems="center" gap={1} height={21}>
                    <Box
                      component="img"
                      src="/triangle-red.png"
                      alt="triangle"
                      width={14}
                      height={14}
                    />
                    <Typography fontSize={14} fontWeight="bold" color="red">
                      11.59%
                    </Typography>
                  </Box>
                  <Stack pt={1}>
                    <Typography fontSize={13} lineHeight={1}>
                      Market Cap
                    </Typography>
                    <Typography fontSize={14} fontWeight="bold">
                      $962K
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack width={1} boxShadow={2} borderRadius={3}>
            <Box
              component="img"
              src="/img3.png"
              height={180}
              alt="container"
              sx={{
                borderRadius: "12px 12px 0 0",
                objectFit: "none",
                objectPosition: "top left",
              }}
            />

            <Grid
              container
              sx={{ bgcolor: "white", borderRadius: "0 0 12px 12px" }}
            >
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Box display="flex" alignItems="center">
                    <Typography fontSize={14} fontWeight="bold" color="black">
                      TICKER3
                    </Typography>
                    <Box
                      component="img"
                      src="/mark.png"
                      width={20}
                      alt="mark"
                    />
                  </Box>

                  <Stack pt={1}>
                    <Typography fontSize={13} lineHeight={1}>
                      Price
                    </Typography>
                    <Typography fontSize={14} fontWeight="bold">
                      $0.1232
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    height={21}
                  ></Box>
                  <Stack pt={1}>
                    <Typography fontSize={13} lineHeight={1}>
                      Market Cap
                    </Typography>
                    <Typography fontSize={14} fontWeight="bold">
                      $701M
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>

        <SwiperSlide>
          <Stack width={1} boxShadow={2} borderRadius={3}>
            <Box
              component="img"
              src="/img4.png"
              height={180}
              alt="container"
              sx={{
                borderRadius: "12px 12px 0 0",
                objectFit: "none",
                objectPosition: "top left",
              }}
            />

            <Grid
              container
              sx={{ bgcolor: "white", borderRadius: "0 0 12px 12px" }}
            >
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Typography fontSize={14} fontWeight="bold" color="black">
                    TICKER4
                  </Typography>
                  <Stack pt={1}>
                    <Typography fontSize={13} lineHeight={1}>
                      Price
                    </Typography>
                    <Typography fontSize={14} fontWeight="bold">
                      $25.51
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ md: 6, xs: 6 }}>
                <Stack p={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    height={21}
                  ></Box>
                  <Stack pt={1}>
                    <Typography fontSize={13} lineHeight={1}>
                      Market Cap
                    </Typography>
                    <Typography fontSize={14} fontWeight="bold">
                      $988
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
}
