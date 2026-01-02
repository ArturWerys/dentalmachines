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
            mt: 6,
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: "0.14em",
                color: "rgba(15,23,42,0.55)",
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
                color: "#0F172A",
              }}
            >
              Lupy stomatologiczne dla ergonomii i precyzji
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(15,23,42,0.72)",
                maxWidth: "62ch",
              }}
            >
              Dobierzemy powiększenie, odległość roboczą i konfigurację tak,
              żeby praca była wygodniejsza i dokładniejsza...
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={{ borderRadius: 3, fontWeight: 900, px: 3, py: 1.2 }}
              >
                Umów dobór
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: 3, fontWeight: 900, px: 3, py: 1.2 }}
              >
                Zobacz produkty
              </Button>
            </Box>

            <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1.2 }}>
              <Button
                component={NextLink}
                href={home.hero.ctaPrimary.href}
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: 3,
                  backgroundColor: colors.white,
                  color: colors.darkText,
                  fontWeight: 900,
                  px: 3,
                  py: 1.35,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.92)" },
                }}
              >
                {home.hero.ctaPrimary.label}
              </Button>

              <Button
                component={NextLink}
                href={home.hero.ctaSecondary.href}
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  borderColor: "rgba(255,255,255,0.45)",
                  color: colors.white,
                  fontWeight: 800,
                  px: 3,
                  py: 1.35,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.75)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                {home.hero.ctaSecondary.label}
              </Button>
            </Box>

          </Box>

          {/* Right column (w stylu screena) */}
          <Box sx={{ display: "grid", gap: 2 }}>
            <Box
              sx={{
                borderRadius: 4,
                p: 3.2,
                backgroundColor: "#fff",
                border: "1px solid rgba(15,23,42,0.10)",
                boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
                color: "#0F172A",
                maxWidth: 520,
              }}
            >
              <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                Dobór w 3 krokach
              </Typography>

              <Typography
                sx={{
                  mt: 0.8,
                  color: "rgba(15,23,42,0.60)",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Szybko dopasujemy konfigurację pod Twoją specjalizację i
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

        <Box
              sx={{
                mt: 6,
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
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
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: "#0EA5A4",
                    }}
                  />
                  <span>{t}</span>
                </Box>
              ))}
            </Box>

        {/* IMAGE + 3 cards overlay */}
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              borderRadius: 4,
              p: 2,
              backgroundColor: colors.pillBg,
              backdropFilter: "blur(10px)",
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
              border: "1px solid rgba(255,255,255,0.18)",
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
                  backgroundColor:
                    idx % 2
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.10)",
                }}
              >
                <Typography sx={{ color: colors.textSoft, fontWeight: 700 }}>
                  {r.left}
                </Typography>
                <Typography sx={{ color: colors.white, fontWeight: 900 }}>
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
            sx={{
              mt: 2.5,
              borderRadius: 3,
              backgroundColor: colors.white,
              color: colors.darkText,
              fontWeight: 900,
              textTransform: "none",
              px: 3,
              py: 1.35,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.92)" },
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
                  backgroundColor: colors.pillBg,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Typography sx={{ fontWeight: 900, color: colors.white }}>
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
              color: colors.white,
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
              backgroundColor: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              }}
            >
              <TextField label="Imię i nazwisko" fullWidth required />
              <TextField label="Telefon" fullWidth required />
              <TextField label="E-mail" type="email" fullWidth required />

              <TextField
                select
                label="Specjalizacja"
                fullWidth
                defaultValue={home.contact.fields.specializations[0]}
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
              >
                {home.contact.fields.interests.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Divider sx={{ my: 2.5, borderColor: "rgba(255,255,255,0.18)" }} />

            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 3,
                backgroundColor: colors.white,
                color: colors.darkText,
                fontWeight: 900,
                px: 3,
                py: 1.35,
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.92)" },
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
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        alignItems: "flex-end",
        borderRadius: 3,
        px: 2.2,
        py: 2,
        backgroundColor: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        color: colors.darkText,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: 14, fontWeight: 900 }}>{title}</Typography>
        <Typography
          sx={{
            mt: 1,
            fontSize: 12.5,
            lineHeight: 1.35,
            color: "rgba(15,23,42,0.65)",
          }}
        >
          {desc}
        </Typography>
      </Box>
      <NorthEastRoundedIcon
        sx={{ fontSize: 18, color: "rgba(15,23,42,0.7)" }}
      />
    </Box>
  );
}

function GlassTile({ text }) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 2.5,
        backgroundColor: colors.pillBg,
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography sx={{ color: colors.white, fontWeight: 900 }}>
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
        backgroundColor: colors.pillBg,
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(10px)",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.14)" },
      }}
    >
      <Typography sx={{ color: colors.white, fontWeight: 900, fontSize: 18 }}>
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
          color: colors.white,
          fontWeight: 900,
          fontSize: 14,
          display: "inline-flex",
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
          backgroundColor: "rgba(14,165,164,0.12)", // teal tint
          color: "#0EA5A4",
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
        <Typography sx={{ fontWeight: 900, fontSize: 15, lineHeight: 1.25 }}>
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.4,
            color: "rgba(15,23,42,0.68)",
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
