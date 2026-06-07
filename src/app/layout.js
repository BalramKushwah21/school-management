import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "School Management",
  description: "A school management system built with Next.js and React.",
};

export default function RootLayout({ children }) {
 const user = "admin";

  return (
    <html lang="en">
      <body>
    

      {children} 
    </body>
    </html>  
  );

  
}
