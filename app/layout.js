import { Geist, Geist_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";
import "./globals.css";
import Header from "../Components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: SITE_CONFIG.school.name,
  description: SITE_CONFIG.school.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>

        <Header />
        
        {children}
        
        </body>
    </html>
  );
}
