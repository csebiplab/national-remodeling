import Footer from "@/components/layouts/Footer/Footer";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Toronto Ontario",
  description:
    "National Remodelling & General Contracting Inc. is one of the best remodeling & contracting companies in Toronto. We’ve been in business for the past 15 years serving the GTA and surrounding areas in both residential and commercial capacity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
