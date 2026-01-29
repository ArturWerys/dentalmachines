"use client";

import NextLink from "next/link";
import { Box, Container, Link, Typography } from "@mui/material";
import colors from "@/data/colors";
import contact from "@/data/contact_info.json";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 8, py: 5, borderTop: `1px solid ${colors.border}` }}
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
                fontSize: 13,
                maxWidth: 360,
              }}
            >
              Lupy stomatologiczne dla ergonomii i precyzji. Dobór pod realną
              pracę w gabinecie.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: 700, color: colors.text, fontSize: 13 }}
            >
              Produkty
            </Typography>
            <Box sx={{ mt: 1.5, display: "grid", gap: 1 }}>
              <FooterLink href="/products/ttl">Lupy TTL</FooterLink>
              <FooterLink href="/products/flipUp">Lupy Flip-Up</FooterLink>
              <FooterLink href="/products/led">Oświetlenie LED</FooterLink>
              <FooterLink href="/products/accessories">Akcesoria</FooterLink>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: 700, color: colors.text, fontSize: 13 }}
            >
              Kontakt
            </Typography>
            <Typography sx={{ mt: 1.5, color: colors.textSoft, fontSize: 13 }}>
              <Link
                href={`mailto:${contact.email}`}
                underline="hover"
                sx={{ color: colors.textSoft }}
              >
                {contact.email}
              </Link>
            </Typography>
            <Typography sx={{ mt: 0.5, color: colors.textSoft, fontSize: 13 }}>
              <Link
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                underline="hover"
                sx={{ color: colors.textSoft }}
              >
                {contact.phone}
              </Link>
            </Typography>
            <Typography sx={{ mt: 0.5, color: colors.textSoft, fontSize: 13 }}>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contact.address,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: colors.textSoft }}
              >
                {contact.address}
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${colors.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography sx={{ color: colors.textSoft, fontSize: 12 }}>
            © {new Date().getFullYear()} {contact.brand}
          </Typography>

          <Typography sx={{ color: colors.textSoft, fontSize: 12 }}>
            developed by Artur Werys
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
        color: colors.textSoft,
        fontSize: 13,
        "&:hover": { color: colors.text, textDecoration: "underline" },
        textDecorationColor: colors.border,
      }}
    >
      {children}
    </Link>
  );
}
