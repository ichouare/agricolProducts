import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "rater product app",
  description: "mini app for give a better experience for users",
};

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} w-full  flex items-center justify-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
