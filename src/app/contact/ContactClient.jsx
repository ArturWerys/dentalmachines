"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import colors from "@/data/colors";
import contact from "@/data/contact_info.json";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const fontSizes = {
  title: { xs: 32, sm: 40, md: 46 },
  subtitle: { xs: 22, md: 28 },
  text: 18,
  small: 16,
  mini: 14,
  heading: 20,
};

const tfSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    backgroundColor: colors.surface,
    "& fieldset": { borderColor: colors.border },
    "&:hover fieldset": { borderColor: colors.border },
    "&.Mui-focused fieldset": { borderColor: colors.accent },
    "&.Mui-focused": {
      boxShadow: `0 0 0 4px ${colors.accent}1A`, // delikatny focus (10% alpha)
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: colors.textSoft,
    opacity: 0.7,
  },
};

const buttonSx = {
  borderRadius: 3,
  fontWeight: 900,
  px: 3,
  py: 1.2,
  textTransform: "none",
  backgroundColor: colors.accent,
  "&:hover": { backgroundColor: colors.accent },
};

const contactInfoData = [
  {
    id: "phone",
    icon: <PhoneOutlinedIcon sx={{ fontSize: 20 }} />,
    value: contact.phone,
  },
  {
    id: "email",
    icon: <EmailOutlinedIcon sx={{ fontSize: 20 }} />,
    value: contact.email,
  },
  {
    id: "address",
    icon: <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />,
    value: contact.address,
  },
];

// Sub-component for contact info panel
function ContactInfoPanel() {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        backgroundColor: colors.surfaceAlt,
        borderRight: { xs: "none", md: `1px solid ${colors.border}` },
      }}
    >
      <Typography
        sx={{
          mt: 1,
          fontSize: fontSizes.subtitle,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          lineHeight: 1.12,
          color: colors.text,
        }}
      >
        Dane kontaktowe
      </Typography>

      <Typography sx={{ mt: 1.5, color: colors.textSoft, lineHeight: 1.8 }}>
        Masz pytanie o konkretną lupę, jej konfigurację, dopasowanie lub inny produkt? Napisz lub zadzwoń do nas!
      </Typography>

      <Box sx={{ mt: 3.25, display: "grid", gap: 1.4 }}>
        {contactInfoData.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              color: colors.textSoft,
            }}
          >
            <Box
              sx={{
                color: colors.accent,
                display: "grid",
                placeItems: "center",
                flex: "0 0 auto",
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{
                color: colors.textSoft,
                lineHeight: 1.7,
                fontWeight: 500, //
                letterSpacing: "0.01em",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 3.5 }}>
        <Typography
          sx={{
            mt: 1,
            color: colors.textSoft,
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          Poniedziałek - Piątek
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <AccessTimeOutlinedIcon sx={{ color: colors.accent }} />
          <Typography
            sx={{
              color: colors.textSoft,
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            9:00 - 18:00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Sub-component for contact form
function ContactForm({ form, onChange, onSubmit }) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        backgroundColor: colors.surface,
        borderTop: { xs: `1px solid ${colors.border}`, md: "none" },
      }}
    >
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 2.5 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Box>
            <Typography sx={{ mb: 0.75, fontWeight: 900, color: colors.text }}>
              Imię
            </Typography>
            <TextField
              fullWidth
              name="firstName"
              value={form.firstName}
              onChange={onChange}
              placeholder="Imię"
              autoComplete="given-name"
              sx={tfSx}
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.75, fontWeight: 900, color: colors.text }}>
              Nazwisko
            </Typography>
            <TextField
              fullWidth
              name="lastName"
              value={form.lastName}
              onChange={onChange}
              placeholder="Nazwisko"
              autoComplete="family-name"
              sx={tfSx}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 0.75, fontWeight: 900, color: colors.text }}>
            Email
          </Typography>
          <TextField
            fullWidth
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="email@example.com"
            autoComplete="email"
            sx={tfSx}
            required
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 0.75, fontWeight: 900, color: colors.text }}>
            Numer telefonu
          </Typography>
          <TextField
            fullWidth
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+48 000 000 000"
            autoComplete="tel"
            sx={tfSx}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 0.75, fontWeight: 900, color: colors.text }}>
            Wiadomość
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={6}
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Twoja wiadomość..."
            sx={{
              ...tfSx,
              "& .MuiInputBase-input": {
                ...tfSx["& .MuiInputBase-input"],
                lineHeight: 1.7,
              },
            }}
            required
          />
        </Box>

        <Box sx={{ mt: 2.5, display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            disableElevation
            sx={buttonSx}
          >
            Wyślij wiadomość
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function ContactClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", form);
    // TODO: podłącz API
    alert("Wysłano (demo).");
  };

  return (
    <Box sx={{ mt: { xs: 4, md: 6 } }}>
      <Typography
        sx={{
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          fontSize: fontSizes.title,
          color: colors.text,
          mb: { xs: 2.5, md: 3 },
          py: 4,
        }}
      >
        Skontaktuj się z nami
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.42fr 0.58fr" },
          gap: 0, // ✅ jedna karta na mobile
          overflow: "hidden",
          borderRadius: 5,
          border: `1px solid ${colors.border}`,
          boxShadow: colors.shadowSm, // ✅ bardziej klinicznie
          backgroundColor: colors.surface,
        }}
      >
        <ContactInfoPanel />
        <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />
      </Box>
    </Box>
  );
}
