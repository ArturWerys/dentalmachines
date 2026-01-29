import { Box, Container } from "@mui/material";
import NavbarPill from "@/components/NavbarPill";
import Footer from "@/components/Footer";
import colors from "@/data/colors";
import AccessoriesProductClient from "./AccessoriesProductClient.jsx";

export const metadata = {
  title: "Akcesoria do lup EYE OPTIC – oprawy, paski, etui",
  description:
    "Akcesoria EYE OPTIC do lup stomatologicznych. Oprawy, paski stabilizujące, etui, osłony i elementy dopasowania.",
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

        <AccessoriesProductClient />

        <Footer />
      </Container>
    </Box>
  );
}
