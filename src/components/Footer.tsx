import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const navlist = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Jobs",
      link: "/",
    },
    {
      title: "Press",
      link: "/",
    },
    {
      title: "Accessibility",
      link: "/",
    },
    {
      title: "Partners",
      link: "/",
    },
  ];
  return (
    <Box component="footer" mb={4}>
      <Container maxWidth="lg">
        <Stack
          flexDirection="row"
          justifyContent="center"
          gap={5}
          flexWrap="wrap"
        >
          {navlist.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              underline="none"
              sx={{ color: "grey" }}
            >
              {item.title}
            </Link>
          ))}
        </Stack>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={5}
          mt={4}
        >
          <Link href="#" underline="none" color="grey">
            <FacebookIcon />
          </Link>
          <Link href="#" underline="none" color="grey">
            <InstagramIcon />
          </Link>
          <Link href="#" underline="none" color="grey">
            <XIcon />
          </Link>
          <Link href="#" underline="none" color="grey">
            <GitHubIcon />
          </Link>
          <Link href="#" underline="none" color="grey">
            <YouTubeIcon />
          </Link>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          {"© "}
          {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
