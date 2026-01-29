"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/data/theme";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
