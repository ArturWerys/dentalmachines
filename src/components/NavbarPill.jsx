"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import colors from "@/data/colors";
import content from "@/data/content";
import contact from "@/data/contact_info.json";

export default function NavbarPill() {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* Brand */}
      <Box
        component={NextLink}
        href="/"
        sx={{
          textDecoration: "none",
          borderRadius: 3,
          px: 2.5,
          py: 1.6,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadow,
        }}
      >
        <Typography sx={{ fontWeight: 900, color: colors.text }}>
          {contact.brand}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          borderRadius: 3,
          px: 1.2,
          py: 1.1,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: colors.shadow,
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
          {content.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                component={NextLink}
                href={item.href}
                underline="none"
                sx={{
                  position: "relative",
                  borderRadius: 2.5,
                  px: 3,
                  py: 1.2,
                  fontSize: 14,
                  fontWeight: 800,
                  color: active ? colors.text : colors.textSoft,
                  backgroundColor: active ? colors.surfaceAlt : "transparent",
                  "&:hover": {
                    backgroundColor: colors.surfaceAlt,
                    color: colors.text,
                  },
                }}
              >
                {active && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: colors.dot,
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
                <Box component="span" sx={{ pl: active ? 1.6 : 0 }}>
                  {item.label}
                </Box>
              </Link>
            );
          })}
        </Box>

        {/* Right controls */}
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1.2, ml: "auto" }}
        >
          <IconButton
            component="a"
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            sx={{
              borderRadius: 3,
              backgroundColor: colors.pillBg,
              color: colors.text,
              "&:hover": { backgroundColor: colors.pillHover },
            }}
            aria-label="Zadzwoń"
          >
            <PhoneRoundedIcon />
          </IconButton>

          <Button
            component={NextLink}
            href="/fitting"
            variant="contained"
            disableElevation
            sx={{
              borderRadius: 3,
              backgroundColor: colors.accent,
              color: colors.white,
              fontWeight: 900,
              px: 3,
              py: 1.25,
              "&:hover": { backgroundColor: colors.accent },
            }}
          >
            Umów dobór
          </Button>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
              borderRadius: 3,
              px: 2,
              py: 1.35,
              backgroundColor: colors.pillBg,
              color: colors.textSoft,
              "&:hover": {
                backgroundColor: colors.pillHover,
                color: colors.text,
              },
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 800 }}>PL</Typography>
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18, opacity: 0.9 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
