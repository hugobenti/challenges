import "./globals.css";
import HeaderNav from "./components/HeaderNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
     <HeaderNav />

        {children}
      </body>
    </html>
  );
}
