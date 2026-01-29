"use client";

import { Box, Typography } from "@mui/material";
import colors from "@/data/colors";

export default function AccessoriesPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: colors.pageBg,
        color: colors.text,
        px: 2,
      }}
    >
      <Typography sx={{ fontWeight: 900, fontSize: { xs: 28, md: 44 } }}>
        Akcesoria… wkrótce
      </Typography>
    </Box>
  );
}
