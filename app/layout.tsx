import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e3440",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moeyehtet.com"),
  openGraph: {
    siteName: "Moe Ye Htet - Electrical Engineer",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  // alternates left
  applicationName: "Moe Ye Htet - Electrical Engineer",
  appleWebApp: {
    title: "Moe Ye Htet - Electrical Engineer",
    statusBarStyle: "default",
    capable: true,
  },
  // verification left
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-lg flex flex-col mx-auto h-screen relative container">
          <NavBar />
          <main id="content" role="main" className="grow">
            {children}
          </main>
          <Footer />
          <div className="max-w-screen-lg fixed w-full bottom-4 flex flex-row justify-end pr-4">
            <ScrollToTopButton />
          </div>
        </div>
      </body>
      <PrelineScript />
    </html>
  );
}
