import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { AuthProvider } from "@/auth/auth-provider";
import RouteGuard from "@/auth/route-guard";

export const metadata = {
  title: "School Management",
  description: "A school management system built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <RouteGuard>
            <Navbar>{children}</Navbar>
          </RouteGuard>
        </AuthProvider>
      </body>
    </html>  
  );
}
