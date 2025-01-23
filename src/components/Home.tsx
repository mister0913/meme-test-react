import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import Page2View from "./home/page2";
import Page1View from "./home/page1";
import Page3View from "./home/page3";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Stack spacing={5} my={7}>
        <Page1View />
        <Page2View />
        <Page3View />
      </Stack>
    </Container>
  );
}
