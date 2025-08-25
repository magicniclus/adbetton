import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "TrouverMonChantier",
  description: "Trouvez le professionnel idéal pour vos travaux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
