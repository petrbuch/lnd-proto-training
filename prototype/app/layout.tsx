import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Client zone | Prototype",
  description: "Household insurance client zone prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
