import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moe Ye Htet",
  description: "Resume website for an enthusiastic Electrical Engineer",
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
