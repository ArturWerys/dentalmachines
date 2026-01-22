import { Box, Container } from "@mui/material";
import NavbarPill from "@/components/NavbarPill";
import Footer from "@/components/Footer";
import colors from "@/data/colors";
import LedProductClient from "./LedProductClient.jsx";

export const metadata = {
  title: "Oświetlenie LED do lup EYE OPTIC – światło bez cieni",
  description:
    "Oświetlenie LED EYE OPTIC do lup stomatologicznych. Równomierna wiązka w osi widzenia, większy komfort i widoczność detali.",
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

        <LedProductClient />

        <Footer />
      </Container>
    </Box>
  );
}
