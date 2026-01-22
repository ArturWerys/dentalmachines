"use client";

import { useMemo } from "react";
import NextLink from "next/link";

import { Box, Button, Typography } from "@mui/material";

import colors from "@/data/colors";

export default function TtlProductClient() {
  const images = useMemo(() => ["/led1.jpg", "/led2.jpg"], []);

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
            Oświetlenie LED do lup
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
              Komfort • Ergonomia • Przejrzystość
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 3,
              color: colors.textSoft,
              lineHeight: 1.75,
            }}
          >
            Dobre światło eliminuje cienie i poprawia kontrast w polu
            zabiegowym. Oświetlenie LED do lup pracuje w osi widzenia, dzięki
            czemu obraz jest jednolity i stabilny — bez konieczności ciągłego
            korygowania lampy unitu.
          </Typography>

          <Box sx={{ mt: 4, display: "grid", gap: 1.5, pb: 4 }}>
            {[
              "Endodoncja",
              "Protetyka i stomatologia estetyczna",
              "Chirurgia i periodontologia",
              "Praca na detalach i granicach preparacji",
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
            Oświetlenie LED do lup zapewnia powtarzalne warunki widzenia
            niezależnie od pozycji pacjenta i etapu zabiegu. To realne wsparcie
            ergonomii i precyzji pracy.
          </Typography>

          <Box sx={{ mt: 3.5, display: "grid", gap: 1.6 }}>
            {[
              {
                title: "Równomierne oświetlenie pola zabiegowego",
                desc: "Jednolita wiązka światła bez ostrych cieni — lepsza kontrola nad detalami.",
              },
              {
                title: "Większa precyzja i kontrast obrazu",
                desc: "Wyraźne granice preparacji i struktury tkanek w całym polu widzenia.",
              },
              {
                title: "Mniejsze uzależnienie od lampy unitu",
                desc: "Światło podąża za wzrokiem, niezależnie od pozycji głowy i pacjenta.",
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
              Dobierz oświetlenie do swojej pracy
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
      {/* RIGHT: Spec card */}

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
              fontSize: fontSizes.subtitle,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: colors.text,
            }}
          >
            Konfiguracje LED
          </Typography>

          <Typography sx={{ mt: 2, color: colors.textSoft, lineHeight: 1.8 }}>
            Konfigurujemy oświetlenie LED pod Twój styl pracy — dobierając
            sposób zasilania, montaż i parametry światła tak, aby zapewnić
            stabilny obraz i komfort przez cały dzień pracy.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                justifyItems: "start",
              }}
            >
              {[
                {
                  label: "Wersja",
                  value: "Przewodowa lub bezprzewodowa",
                },
                {
                  label: "Zasilanie",
                  value: "Akumulator Li-ion · do 8 h pracy",
                },
                {
                  label: "Montaż",
                  value: "System clip-on do lup i opraw okularowych",
                },
                {
                  label: "Temperatura barwowa",
                  value: "4 500 K – 6 500 K (światło neutralne–chłodne)",
                },
              ].map((param) => (
                <Box
                  key={param.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column", // nazwa nad wartością
                    gap: 0.8, // odstęp między label a wartością
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    {/* zielona kropka */}
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: colors.accent,
                        flex: "0 0 auto",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: colors.text,
                        fontSize: fontSizes.text,
                      }}
                    >
                      {param.label}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: colors.textSoft,
                      fontSize: fontSizes.small,
                      ml: "16px", // opcjonalnie, żeby wartość była lekko przesunięta pod nazwę
                    }}
                  >
                    {param.value}
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
