import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "EYE OPTIC",
  description: "Lupy stomatologiczne: TTL, Flip-Up i oświetlenie LED.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body style={{ margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
