import "./globals.css";


export const metadata = {
  title: "School Management",
  description: "A school management system built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
            {children}
        
      </body>
    </html>  
  );
}
