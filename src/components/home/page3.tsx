import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

export default function Page3View() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const navlist = ["About", "Blog", "Something Else", "TBD"];

  return (
    <Stack height={190}>
      <Typography fontSize={32} fontWeight={700} color="black">
        Learn more
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
        {navlist.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                height: 100, // Set the desired height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src="/bg.png" // Replace with your image URL
                alt="Background"
                sx={{
                  position: "absolute",
                  width: 1,
                  height: 100,
                  borderRadius: 3,
                  objectFit: "cover",
                }}
              />
              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  borderRadius: 3,
                  background:
                    "radial-gradient(circle, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.3) 90%)",
                  zIndex: 1, // Below the text
                }}
              />
              {/* Text Positioned at the Top */}
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "center", // Adjust the top margin as needed
                  left: "50%",
                  transform: "translateX(-50%)", // Centers text horizontally
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  zIndex: 2, // Above the gradient
                }}
              >
                {item}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
