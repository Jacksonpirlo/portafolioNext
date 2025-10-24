import Navbar from "@/components/organism/Nav";
import "./globals.css";
import Footer from "@/components/organism/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Sarpanch:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>



      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap" rel="stylesheet" />
</head>
      <body className="bg-[#0f0f0f]">
      <div className="lg:hidden"><Navbar/></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
