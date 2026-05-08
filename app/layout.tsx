import "./globals.css";
import { Roboto } from "next/font/google";
import { HomeHeader } from "./../components/header/Header";
import { HomeFooter } from "./../components/footer/Footer";

const RobotoSans = Roboto({
  variable: "--font-custom-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${RobotoSans.variable} `}>
        <HomeHeader />

        {children}
        <HomeFooter />
      </body>
    </html>
  );
}
