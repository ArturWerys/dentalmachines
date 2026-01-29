import { Box, Container } from "@mui/material";
import NavbarPill from "@/components/NavbarPill";
import Footer from "@/components/Footer";
import colors from "@/data/colors";
import FAQClientPage from "./FAQClient.jsx";

export const metadata = {
  title: "Sekcja FAQ - najczęściej zadawane pytania dotyczące lup EYE OPTIC",
  description:
    "Sekcja FAQ - najczęściej zadawane pytania dotyczące lup EYE OPTIC.",
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

        <FAQClientPage />

        <Footer />
      </Container>
    </Box>
  );
}
