import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mastara | Rooftop Restaurant Islamabad",
  description: "Experience exquisite Pakistani cuisine at Mastara — Islamabad's finest rooftop dining. Desi, Chinese, Continental & Live BBQ at I-8 Markaz.",
  keywords: "restaurant, Pakistani food, Mastara, Islamabad, I-8 Markaz, rooftop dining, Desi cuisine, Chinese food, Continental, BBQ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${raleway.className} antialiased bg-black text-white`}>
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
