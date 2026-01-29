"use client";

import { useMemo } from "react";
import NextLink from "next/link";

import { Box, Button, Typography } from "@mui/material";

import colors from "@/data/colors";

export default function TtlProductClient() {
  const images = useMemo(() => ["/FlipUp1.jpg", "/FlipUp2.png"], []);

  const fontSizes = {
    title: { xs: 32, sm: 40, md: 46 },
    subtitle: { xs: 26, md: 34 },
    text: 18,
    small: 16,
    mini: 14,
    heading: 20,
  };

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
              fontSize: fontSizes.title,
              color: colors.text,
            }}
          >
            Lupy Flip-Up
          </Typography>

          {/* mini meta */}
          <Box
            sx={{
              mt: 2.5,
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              color: colors.textSoft,
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: fontSizes.mini,
                fontWeight: 800,
                color: colors.accent,
                letterSpacing: "0.1em", // <-- zwiększa odstęp między literami, także przy kropkach
              }}
            >
              Stabilność • Ergonomia • Precyzja
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 3,
              color: colors.textSoft,
              lineHeight: 1.75,
            }}
          >
            Flip-Up to lupy dla tych, którzy chcą elastyczności. Dostarczają
            możliwość odchylenia optyki, łatwiejszą regulację i wygodną pracę
            “mix” w gabinecie. Idealne jako pierwsze lupy lub do codziennej
            stomatologii ogólnej.
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
              fontSize: fontSizes.subtitle,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: colors.text,
            }}
          >
            Najważniejsze korzyści
          </Typography>

          <Typography sx={{ mt: 2, color: colors.textSoft, lineHeight: 1.8 }}>
            Flip-Up daje spójne pole widzenia i powtarzalny obraz — szczególnie
            wtedy, gdy liczy się precyzja i komfort przez wiele godzin pracy.
          </Typography>

          <Box sx={{ mt: 3.5, display: "grid", gap: 1.6 }}>
            {[
              {
                title: "Szybka regulacja ",
                desc: "łatwiej dopasować ustawienie",
              },
              {
                title: "Odchylenie optyki ",
                desc: "przełączasz się między powiększeniem a widzeniem naturalnym",
              },
              {
                title: "Uniwersalność",
                desc: "dobra opcja do wielu procedur",
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
              href="/contact"
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
              Umów dopasowanie Flip-Up
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
          alignItems: "stretch",
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
              fontSize: fontSizes.small,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: colors.textSoft,
              opacity: 0.75,
            }}
          >
            Specyfikacja / konfiguracja
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: fontSizes.subtitle,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: colors.text,
            }}
          >
            Konfiguracje Flip-Up
          </Typography>

          <Typography sx={{ mt: 2, color: colors.textSoft, lineHeight: 1.8 }}>
            Dobieramy powiększenie, odległość roboczą i oprawę tak, abyś
            pracował w naturalnej pozycji i miał powtarzalny obraz bez szukania
            ustawień w trakcie pracy.
          </Typography>

          {/* Podpis dla powiększeń */}
          <Typography
            sx={{
              mt: 3,
              mb: 0.75,
              fontSize: fontSizes.small,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: colors.textSoft,
              opacity: 0.75,
            }}
          >
            Dostępne powiększenia
          </Typography>

          {/* Podpis dla powiększeń */}

          <Typography
            sx={{
              mt: 0,
              mb: 1.5,
              fontSize: fontSizes.small,
              lineHeight: 1.7,
              color: colors.textSoft,
            }}
          >
            Dobór zależy od typu zabiegów i pozycji pracy — dopasujemy je
            podczas konsultacji.
          </Typography>

          {/* Kafelki powiększeń */}
          {/* Kafelki powiększeń — jak w LED */}
          <Box sx={{ mt: 1.25 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: { xs: 1.6, sm: 2 },
                justifyItems: "start",
              }}
            >
              {["2.5×", "4.0×", "3.0×", "3.5×"].map((m) => (
                <Box
                  key={m}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: colors.accent,
                      flex: "0 0 auto",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: colors.text,
                      fontSize: fontSizes.text, // albo 16 jeśli chcesz lżej
                    }}
                  >
                    {m}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
