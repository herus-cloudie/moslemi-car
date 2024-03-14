
import { Footer, Header } from "@/components/template";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
