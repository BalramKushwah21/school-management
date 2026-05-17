import { Geist, Geist_Mono } from "next/font/google";
import { schoolConfig } from "@/config/schoolConfig";
import "./global.css";
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
  title: schoolConfig.school.name,
  description: schoolConfig.school.tagline,
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
