import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { AuthProvider } from "@/auth/auth-provider";
import RouteGuard from "@/auth/route-guard";

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
  return (
    <html lang="en">
      <body>
      <AuthProvider>
        <Navbar>
          <RouteGuard>{children}</RouteGuard>
        </Navbar>
      </AuthProvider>
      </body>
    </html>  
  );

  
}
