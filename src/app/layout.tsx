import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/navbar";
import Footer from "@/components/molecules/footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rakata Heat",
  description:
    "Kami adalah profesional berpengalaman di bidang heat treatment yang kemudian mendirikan perusahaan dengan nama PT RAKATA HEAT. Sejak didirikan, komitmen perusahaan pada pelayanan site telah menjadi fitur dominan dalam pengembangan reputasi yang diperoleh dengan baik, untuk standar kualitas dan keahlian teknis tertinggi. Kami hadir untuk memberikan keunggulan layanan di Indonesia, untuk industri minyak, petrokimia, pembangkit listrik, kelautan, logam dan metalurgi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
