"use client";

import NextLink from "next/link";
import { Box, Container, Link, Typography } from "@mui/material";
import colors from "@/data/colors";
import contact from "@/data/contact_info.json";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 8, py: 5, borderTop: "1px solid rgba(255,255,255,0.18)" }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 900, color: colors.text }}>
              {contact.brand}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: colors.textSoft,
                fontSize: 14,
                maxWidth: 360,
              }}
            >
              Lupy stomatologiczne dla ergonomii i precyzji. Dobór pod realną
              pracę w gabinecie.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: 800, color: colors.text, fontSize: 14 }}
            >
              Szybkie linki
            </Typography>
            <Box sx={{ mt: 1.5, display: "grid", gap: 1 }}>
              <FooterLink href="/products">Produkty</FooterLink>
              <FooterLink href="/fitting">Dobór</FooterLink>
              <FooterLink href="/service">Serwis</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/contact">Kontakt</FooterLink>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: 800, color: colors.text, fontSize: 14 }}
            >
              Dokumenty
            </Typography>
            <Box sx={{ mt: 1.5, display: "grid", gap: 1 }}>
              <FooterLink href="/privacy">Polityka prywatności</FooterLink>
              <FooterLink href="/cookies">Cookies</FooterLink>
              <FooterLink href="/terms">Regulamin</FooterLink>
              <FooterLink href="/downloads">Do pobrania</FooterLink>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: 800, color: colors.text, fontSize: 14 }}
            >
              Kontakt
            </Typography>
            <Typography sx={{ mt: 1.5, color: colors.textSoft, fontSize: 14 }}>
              <Link
                href={`mailto:${contact.email}`}
                underline="hover"
                sx={{ color: colors.textSoft }}
              >
                {contact.email}
              </Link>
            </Typography>
            <Typography sx={{ mt: 0.5, color: colors.textSoft, fontSize: 14 }}>
              {contact.phone}
            </Typography>
            <Typography sx={{ mt: 0.5, color: colors.textSoft, fontSize: 14 }}>
              {contact.address}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.18)" }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 12 }}>
            © {new Date().getFullYear()} {contact.brand}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      component={NextLink}
      href={href}
      underline="none"
      sx={{
        color: "rgba(255,255,255,0.78)",
        fontSize: 14,
        "&:hover": { color: "white" },
      }}
    >
      {children}
    </Link>
  );
}
