import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo list by Tomas Villarreal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
