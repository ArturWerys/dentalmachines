"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

import colors from "@/data/colors";
import content from "@/data/content";
import NavbarPill from "@/components/NavbarPill";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const { home } = content;

  const fieldSx = {
    "& .MuiInputBase-root": {
      backgroundColor: colors.surface,
      borderRadius: 3,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.border,
    },
  };

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

        {/* HERO */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: "grid",
            gap: { xs: 4, md: 5 },
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            alignItems: "start",
          }}
        >
          {/* Left */}
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.14em",
                color: colors.textMute,
              }}
            >
              EYE OPTIC
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                fontSize: { xs: 44, sm: 56, md: 86 },
                maxWidth: { md: "16ch" },
                color: colors.text,
              }}
            >
              Lupy stomatologiczne dla ergonomii <br /> i precyzji
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontSize: 18,
                lineHeight: 1.65,
                color: colors.textSoft,
                maxWidth: "62ch",
              }}
            >
              Dobierzemy powiększenie, odległość roboczą i konfigurację tak,
              żeby praca była wygodniejsza i dokładniejsza. Liczy się ergonomia,
              jasny obraz i dopasowanie do realnej pracy w gabinecie.
            </Typography>

            {/* CTA (TYLKO JEDEN BLOK – bez duplikatu) */}
            <Box sx={{ mt: 3, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
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
                }}
              >
                Umów dobór
              </Button>

              <Button
                component={NextLink}
                href="/products"
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  fontWeight: 900,
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  borderColor: "rgba(15,23,42,0.18)",
                  "&:hover": { borderColor: "rgba(15,23,42,0.28)" },
                }}
              >
                Zobacz produkty
              </Button>
            </Box>
          </Box>

          {/* Right */}
          <Box sx={{ display: "grid", gap: 2 }}>
            <Box
              sx={{
                borderRadius: 4,
                p: { xs: 2.6, md: 3.2 },
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                boxShadow: colors.shadow,
                color: colors.text,
                maxWidth: 520,
              }}
            >
              <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                Dobór w 3 krokach
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,
                  color: colors.textSoft,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Dopasujemy konfigurację pod Twoją specjalizację <br /> i
                ergonomię.
              </Typography>

              <Box sx={{ mt: 2.4, display: "grid", gap: 2 }}>
                <Step
                  n="1"
                  title="Rozmowa (5–10 min)"
                  desc="Specjalizacja, nawyki pracy, oczekiwania."
                />
                <Step
                  n="2"
                  title="Pomiary"
                  desc="PD, odległość robocza, preferowana pozycja."
                />
                <Step
                  n="3"
                  title="Konfiguracja"
                  desc="Powiększenie, oprawa, LED, ewentualna korekcja."
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* TRUST (bliżej CTA, 3 obok siebie na desktopie) */}
        <Box
          sx={{
            mt: { xs: 3, md: 3.5 },
            display: "grid",
            gap: 2.5,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            color: "rgba(15,23,42,0.70)",
          }}
        >
          {[
            "Dobór pod specjalizację",
            "Korekcja wzroku w konfiguracji",
            "TTL / Flip-Up / LED — do wyboru",
          ].map((t) => (
            <Box
              key={t}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                fontWeight: 700,
                whiteSpace: "nowrap",
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
              <Typography component="span" sx={{ fontWeight: 700 }}>
                {t}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* IMAGE + 3 cards overlay */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Divider
            sx={{ mb: { xs: 3, md: 4 }, borderColor: "rgba(15,23,42,0.08)" }}
          />
          <Box
            sx={{
              borderRadius: 4,
              p: 2,
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              boxShadow: colors.shadowSm,
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3.5,
                backgroundColor: "#E9EEF2",
                aspectRatio: { xs: "16/10", md: "21/9" },
              }}
            >
              <Box
                component="img"
                src="/hero.jpg"
                alt="Hero"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: { xs: 2, md: 3 },
                  display: "grid",
                  gap: 1.5,
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                }}
              >
                {home.hero.points.map((p) => (
                  <OfferCard key={p.title} title={p.title} desc={p.desc} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* WHY */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {home.why.heading}
          </Typography>
          <Typography
            sx={{ mt: 2, color: colors.textSoft, fontSize: 15, maxWidth: 820 }}
          >
            {home.why.text}
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            }}
          >
            {home.why.tiles.map((t) => (
              <GlassTile key={t} text={t} />
            ))}
          </Box>
        </Box>

        {/* PRODUCTS */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {home.products.heading}
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            }}
          >
            {home.products.tiles.map((t) => (
              <ProductTile key={t.title} {...t} />
            ))}
          </Box>
        </Box>

        {/* COMPARE */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 34 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {home.compare.heading}
          </Typography>

          <Box
            sx={{
              mt: 2,
              borderRadius: 3,
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              boxShadow: colors.shadowSm,
              backgroundColor: colors.surface,
            }}
          >
            {home.compare.rows.map((r, idx) => (
              <Box
                key={r.left}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  px: 2.5,
                  py: 2,
                  backgroundColor: idx % 2 ? colors.surfaceAlt : colors.surface,
                }}
              >
                <Typography sx={{ color: colors.textSoft, fontWeight: 700 }}>
                  {r.left}
                </Typography>
                <Typography sx={{ color: colors.text, fontWeight: 900 }}>
                  {r.right}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{ mt: 2, color: colors.textSoft, fontSize: 14, maxWidth: 860 }}
          >
            {home.compare.note}
          </Typography>

          <Button
            component={NextLink}
            href="/fitting"
            variant="contained"
            disableElevation
            sx={{
              mt: 2.5,
              borderRadius: 3,
              fontWeight: 900,
              px: 3,
              py: 1.2,
              textTransform: "none",
            }}
          >
            Umów dobór
          </Button>
        </Box>

        {/* REVIEWS placeholder */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 34 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {home.reviews.heading}
          </Typography>
          <Typography sx={{ mt: 2, color: colors.textSoft, fontSize: 14 }}>
            {home.reviews.hint}
          </Typography>
        </Box>

        {/* FAQ preview */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 34 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {home.faqPreview.heading}
          </Typography>

          <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
            {home.faqPreview.items.map((it) => (
              <Box
                key={it.q}
                sx={{
                  borderRadius: 3,
                  p: 2.5,
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                  boxShadow: colors.shadowSm,
                }}
              >
                <Typography sx={{ fontWeight: 900, color: colors.text }}>
                  {it.q}
                </Typography>
                <Typography
                  sx={{ mt: 1, color: colors.textSoft, fontSize: 14 }}
                >
                  {it.a}
                </Typography>
              </Box>
            ))}
          </Box>

          <Link
            component={NextLink}
            href={home.faqPreview.moreHref}
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mt: 2.5,
              color: colors.text,
              fontWeight: 900,
            }}
          >
            {home.faqPreview.moreLabel}{" "}
            <NorthEastRoundedIcon sx={{ fontSize: 18 }} />
          </Link>
        </Box>

        {/* CONTACT FORM */}
        <Box sx={{ mt: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {home.contact.heading}
          </Typography>

          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Wersja demo nie obsługuje wysyłania formularzy.");
            }}
            sx={{
              mt: 3,
              borderRadius: 4,
              p: { xs: 2, md: 3 },
              backgroundColor: colors.surfaceAlt,
              border: `1px solid ${colors.border}`,
              boxShadow: colors.shadowSm,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              }}
            >
              <TextField
                label="Imię i nazwisko"
                fullWidth
                required
                sx={fieldSx}
              />
              <TextField label="Telefon" fullWidth required sx={fieldSx} />
              <TextField
                label="E-mail"
                type="email"
                fullWidth
                required
                sx={fieldSx}
              />

              <TextField
                select
                label="Specjalizacja"
                fullWidth
                defaultValue={home.contact.fields.specializations[0]}
                sx={fieldSx}
              >
                {home.contact.fields.specializations.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Co Cię interesuje"
                fullWidth
                defaultValue={home.contact.fields.interests[3]}
                sx={fieldSx}
              >
                {home.contact.fields.interests.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Divider sx={{ my: 2.5, borderColor: colors.border }} />

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 3,
                fontWeight: 900,
                px: 3,
                py: 1.2,
                textTransform: "none",
              }}
            >
              Wyślij — oddzwonimy / odpiszemy
            </Button>
          </Box>
        </Box>

        <Footer />
      </Container>
    </Box>
  );
}

function OfferCard({ title, desc }) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        px: 2.2,
        py: 2,
        backgroundColor: "rgba(255,255,255,0.92)",
        border: "1px solid rgba(15,23,42,0.10)",
        boxShadow: "0 10px 25px rgba(15,23,42,0.10)",
        backdropFilter: "blur(8px)",
        textAlign: "center",

        // --- HOVER / ANIMACJA ---
        transition:
          "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 14px 30px rgba(15,23,42,0.14)",
          borderColor: "rgba(15,23,42,0.14)",
        },
      }}
    >
      <Typography sx={{ fontSize: 16, fontWeight: 900 }}>{title}</Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: 14,
          lineHeight: 1.35,
          color: "rgba(15,23,42,0.65)",
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

function GlassTile({ text }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 2.5,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: colors.shadowSm,
      }}
    >
      <Typography sx={{ color: colors.text, fontWeight: 900 }}>
        {text}
      </Typography>
    </Box>
  );
}

function ProductTile({ title, desc, href, cta }) {
  return (
    <Box
      component={NextLink}
      href={href}
      sx={{
        textDecoration: "none",
        borderRadius: 3,
        p: 2.5,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: colors.shadowSm,
        display: "block",
        "&:hover": { backgroundColor: colors.surfaceAlt },
      }}
    >
      <Typography sx={{ color: colors.text, fontWeight: 900, fontSize: 18 }}>
        {title}
      </Typography>
      <Typography
        sx={{ mt: 1, color: colors.textSoft, fontSize: 14, maxWidth: 520 }}
      >
        {desc}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          color: colors.accent,
          fontWeight: 900,
          fontSize: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {cta} <NorthEastRoundedIcon sx={{ fontSize: 18 }} />
      </Typography>
    </Box>
  );
}

function Step({ n, title, desc }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "32px 1fr",
        gap: 1.6,
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: 999,
          backgroundColor: colors.accentSoft,
          color: colors.accent,
          display: "grid",
          placeItems: "center",
          fontWeight: 900,
          fontSize: 13,
          mt: "2px",
        }}
      >
        {n}
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: 15,
            lineHeight: 1.25,
            color: colors.text,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.4,
            color: colors.textSoft,
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
