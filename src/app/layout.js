import { Exo_2, Open_Sans } from "next/font/google";
import "./globals.css";
import ToastWrapper from "@/wrapper/ToastWrapper";
import HeaderNav from "@/components/HeaderNav";
import NextTopLoader from "nextjs-toploader";

export const open_sans = Open_Sans({ subsets: ["latin"] });
const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "Feminist Spot App",
  description:
    "The Feminist Spot App is a pioneering initiative designed to enhance access to quality sexual and reproductive health rights (SRHR) services for adolescent girls in Zambia through a comprehensive digital media literacy campaign delivered via a mobile application",
  lang: "en",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={exo2.className}>
        <NextTopLoader />
        <HeaderNav />
        {children}
        <ToastWrapper />
      </body>
    </html>
  );
}
