import Footer from "@/components/layouts/Footer/Footer";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});


export async function generateMetadata() {
  try {
    const [metaDataResponse, googleVerificationResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verificationUrl`),
    ]);

    if (!metaDataResponse.ok || !googleVerificationResponse.ok) {
      console.error('Network response was not ok');
    }

    const metaData = await metaDataResponse.json();
    const googleVerification = await googleVerificationResponse.json();

    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    const {
      title = "Toronto Ontario",
      description = "The general contractors in Toronto of National Remodelling & General Contracting Inc. offer top-notch #1 remodeling and construction services.",
      keywords = "The general contractors in Toronto of National Remodelling & General Contracting Inc. offer top-notch #1 remodeling and construction services.",

    } = metaData?.homeRouteAllMetaData?.[0] || {};

    return {
      title,
      description,
      keywords,
      verification: {
        google: googleConsoleKey,
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "Toronto Concrete Pumping Company | Prime Concrete Pumping in Toronto",
      description: "The general contractors in Toronto of National Remodelling & General Contracting Inc. offer top-notch #1 remodeling and construction services.",
      keywords: "The general contractors in Toronto of National Remodelling & General Contracting Inc. offer top-notch #1 remodeling and construction services.",
    };
  }
}

function extractGoogleConsoleKey(googleVerification) {
  try {
    const { verificationUrl } = googleVerification ?? {};
    if (!verificationUrl || !verificationUrl[0]?.title) return "";
    const metaTagContent = verificationUrl[0].title;
    const consoleKey = metaTagContent.split("=").pop().slice(1, -4);
    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

// export const metadata = {
//   title: "Toronto Ontario",
//   description:
//     "The general contractors in Toronto of National Remodelling & General Contracting Inc. offer top-notch #1 remodeling and construction services.",
// };

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
