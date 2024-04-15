import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google clone",
  description: "Google clone created using next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
