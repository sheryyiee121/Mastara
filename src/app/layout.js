import { Raleway, Oswald } from "next/font/google";
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

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mastara | Rooftop Restaurant Islamabad",
  description: "Mastara redefines rooftop dining in Islamabad. Blending panoramic skyline views with refined Desi, Thai, Chinese, Fast Food & Continental cuisines.",
  keywords: "Mastara, rooftop restaurant, Islamabad, Desi food, Thai cuisine, Chinese food, Continental, Fast Food, skyline dining",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${oswald.variable} ${raleway.className} antialiased bg-black text-white`}>
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
