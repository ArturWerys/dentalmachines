import { Box, Container } from "@mui/material";
import NavbarPill from "@/components/NavbarPill";
import Footer from "@/components/Footer";
import colors from "@/data/colors";
import FlipUpProductClient from "./FlipUpProductClient.jsx";

export const metadata = {
  title: "Lupy Flip-Up EYE OPTIC",
  description:
    "Lupy Flip-Up EYE OPTIC – wygodna regulacja i możliwość odchylenia optyki. Idealne jako pierwsze lupy lub do pracy mieszanej.",
};

export default function Page() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.pageBg,
        color: colors.text,
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <NavbarPill />

        <FlipUpProductClient />

        <Footer />
      </Container>
    </Box>
  );
}
