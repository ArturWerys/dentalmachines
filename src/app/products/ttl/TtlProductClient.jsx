"use client";

import { useMemo } from "react";
import NextLink from "next/link";

import { Box, Button, Typography } from "@mui/material";

import colors from "@/data/colors";

export default function TtlProductClient() {
  const images = useMemo(() => ["/TTLA3_1.jpg", "/TTLA3_2.jpg"], []);

  return (
    <>
      {/* TOP: TTL + image (image wyśrodkowane względem reszty) */}
      <Box
        sx={{
          mt: { xs: 4, md: 6 },
          display: "grid",
          pb: 1,
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
          alignItems: "center", // ✅ było "start" — teraz wyśrodkowuje obraz względem karty
        }}
      >
        {/* LEFT: Gallery */}
        <Box
          sx={{
            borderRadius: 5,
            overflow: "hidden",
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.surfaceAlt,
            boxShadow: colors.shadowSm,
            position: "relative",
            aspectRatio: "7/5",
          }}
        >
          <Box
            component="img"
            src={images[0]}
            alt="TTL image 1"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 50%",
              filter: "contrast(1.02) saturate(1.02)",
            }}
          />
        </Box>

        {/* RIGHT: Product card */}
        <Box
          sx={{
            borderRadius: 5,
            p: { xs: 2.5, md: 3 },
            pl: { xs: 3, md: 4 },
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            boxShadow: colors.shadow,
          }}
        >
          <Typography
            sx={{
              mt: 2,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              fontSize: { xs: 32, sm: 40, md: 46 },
              color: colors.text,
            }}
          >
            Lupy TTL
          </Typography>

          {/* mini meta */}
          <Box
            sx={{
              mt: 2.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: colors.textSoft,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{ fontSize: 13, fontWeight: 800, color: colors.accent }}
            >
              Stabilność • Ergonomia • Precyzja
            </Typography>
          </Box>

          <Typography sx={{ mt: 3, color: colors.textSoft, lineHeight: 1.75 }}>
            TTL (Through The Lens) to rozwiązanie dla osób, które chcą
            maksymalnej stabilności obrazu i pracy “bez poprawiania ustawień”.
            Optyka osadzona w szkłach daje spójne pole widzenia i wysoką
            precyzję w wymagających procedurach.
          </Typography>

          <Box sx={{ mt: 4, display: "grid", gap: 1.5, pb: 4 }}>
            {[
              "Endodoncja",
              "Protetyka / estetyka",
              "Chirurgia / perio",
              "Praca na detalach i granicach",
            ].map((t) => (
              <Box
                key={t}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  color: colors.textSoft,
                  fontWeight: 700,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: colors.accent,
                  }}
                />
                <span>{t}</span>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Najważniejsze korzyści — bez otoczki, styl jak konfiguracje */}
      <Box
        sx={{
          mt: { xs: 6, md: 8 },
          display: "grid",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
        }}
      >
        <Box sx={{ px: { md: 2 } }}>
          <Typography
            sx={{
              fontSize: { xs: 26, md: 34 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: colors.text,
            }}
          >
            Najważniejsze korzyści
          </Typography>

          <Typography sx={{ mt: 2, color: colors.textSoft, lineHeight: 1.8 }}>
            TTL daje spójne pole widzenia i powtarzalny obraz — szczególnie
            wtedy, gdy liczy się precyzja i komfort przez wiele godzin pracy.
          </Typography>

          <Box sx={{ mt: 3.5, display: "grid", gap: 1.6 }}>
            {[
              {
                title: "Stabilny obraz",
                desc: "mniej mikro-ruchów i „pływania” podczas pracy",
              },
              {
                title: "Praca w ergonomii",
                desc: "dobrany kąt i odległość robocza dla naturalnej pozycji",
              },
              {
                title: "Przewidywalność",
                desc: "raz ustawione — działa, bez ciągłego poprawiania",
              },
            ].map((b) => (
              <Box
                key={b.title}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    mt: "10px",
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: colors.accent,
                    flex: "0 0 auto",
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 900, color: colors.text }}>
                    {b.title}
                  </Typography>
                  <Typography
                    sx={{ mt: 0.4, color: colors.textSoft, lineHeight: 1.7 }}
                  >
                    {b.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 3.25 }}>
            <Button
              component={NextLink}
              href="/fitting"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 3,
                fontWeight: 900,
                px: 3,
                py: 1.2,
                textTransform: "none",
                backgroundColor: colors.accent,
                "&:hover": { backgroundColor: colors.accent },
              }}
            >
              Umów dopasowanie TTL
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: 5,
            overflow: "hidden",
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.surfaceAlt,
            boxShadow: colors.shadowSm,
            position: "relative",
            aspectRatio: "7/5",
          }}
        >
          <Box
            component="img"
            src={images[1]}
            alt="TTL image 2"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 50%",
              filter: "contrast(1.02) saturate(1.02)",
            }}
          />
        </Box>
      </Box>

      {/* Konfiguracje — PREMIUM (spacing dopasowany) */}
      <Box
        sx={{
          mt: { xs: 6, md: 8 },
          display: "grid",
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            px: { md: 2 },
            backgroundColor: colors.surface,
            borderRadius: 5,
            p: { xs: 2.5, md: 3 },
          }}
        >
          <Typography
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: colors.textSoft,
              opacity: 0.9,
            }}
          >
            Specyfikacja / konfiguracja
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: 26, md: 34 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: colors.text,
            }}
          >
            Konfiguracje TTL
          </Typography>

          <Typography sx={{ mt: 2, color: colors.textSoft, lineHeight: 1.8 }}>
            Dobieramy powiększenie, odległość roboczą i oprawę tak, abyś
            pracował w naturalnej pozycji i miał powtarzalny obraz bez szukania
            ustawień w trakcie pracy.
          </Typography>

          {/* Podpis dla powiększeń */}
          <Typography
            sx={{
              mt: 2.5,
              mb: 1,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: colors.textSoft,
              opacity: 0.9,
            }}
          >
            Dostępne powiększenia
          </Typography>

          <Typography
            sx={{
              mt: -0.25,
              mb: 1.5,
              fontSize: 14,
              lineHeight: 1.7,
              color: colors.textSoft,
            }}
          >
            Dobór zależy od typu zabiegów i pozycji pracy — dopasujemy je
            podczas konsultacji.
          </Typography>

          <Box sx={{ mt: 0, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {["2.5×", "3.0×", "3.5×", "4.0×"].map((m) => (
              <Box
                key={m}
                sx={{
                  px: 1.5,
                  py: 0.7,
                  borderRadius: 999,
                  border: `1px solid ${colors.border}`,
                  background: `linear-gradient(180deg, ${colors.surfaceAlt} 0%, ${colors.surface} 100%)`,
                  color: colors.text,
                  fontWeight: 900,
                  fontSize: 13,
                  boxShadow: colors.shadowSm,
                  minWidth: 110,
                  textAlign: "center",
                }}
              >
                {m}
              </Box>
            ))}
          </Box>

          {/* <Box sx={{ mt: 2.75 }}>
            <Button
              component={NextLink}
              href="/fitting"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 3,
                fontWeight: 900,
                px: 3,
                py: 1.2,
                textTransform: "none",
                backgroundColor: colors.accent,
                "&:hover": { backgroundColor: colors.accent },
              }}
            >
              Dopasuj konfigurację
            </Button>
          </Box> */}
        </Box>

        {/* RIGHT: Spec card */}
        <Box
          sx={{
            borderRadius: 5,
            p: { xs: 2.5, md: 3 },
            pl: { xs: 3, md: 4 },
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            boxShadow: colors.shadow,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(900px 220px at 20% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)",
              opacity: 0.9,
            }}
          />

          <Typography
            sx={{
              position: "relative",
              mt: 2,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: colors.text,
              fontSize: 18,
            }}
          >
            Najważniejsze parametry techniczne:
          </Typography>

          <Typography
            sx={{
              position: "relative",
              mt: 2.5,
              color: colors.textSoft,
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            Wartości zależą od konfiguracji (powiększenia, oprawy i korekcji
            wzroku).
          </Typography>

          {/* Kafelki: luźniej (większy gap + padding + oddech między label/value) */}
          <Box
            sx={{
              position: "relative",
              mt: 3,
              pb: 4,
              display: "grid",
              gap: 2, // ✅ było 1.5
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            }}
          >
            {[
              { label: "Odległość robocza", value: "50 cm" },
              { label: "Pole widzenia", value: "100°" },
              { label: "Waga zestawu", value: "300 g" },
              { label: "Korekcja wzroku", value: "+- 3 dioptrie" },
            ].map((row) => (
              <Box
                key={row.label}
                sx={{
                  borderRadius: 4,
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.surfaceAlt,
                  p: 2.5, // ✅ było 2
                  boxShadow: colors.shadowSm,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: colors.textSoft,
                    opacity: 0.85,
                  }}
                >
                  {row.label}
                </Typography>

                <Typography
                  sx={{
                    mt: 1, // ✅ było 0.6 — więcej oddechu
                    fontSize: 14,
                    fontWeight: 800,
                    color: colors.text,
                    lineHeight: 1.35,
                  }}
                >
                  {row.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
