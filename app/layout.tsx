import type { Metadata } from "next";
// import localFont from 'next/font/local'

import "./globals.css";

// const font = localFont({
//   src: '../public/fonts/NeueMetana-Regular.otf',
// })

export const metadata: Metadata = {
  title: "OnlyUp",
  description: "Best Creative Agency in Europe.",
  icons: {
    icon: [
      {
        url: "/Logo.svg",
        href: "/logo.svg",
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= "neue-haas-grotesk-font"
      // {font.className}
      >
        {children}
      </body>
    </html>
  );
}
