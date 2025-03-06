import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-fira-code',
});

const firaCodeNerd = localFont({
  src: [
    {
      path: '../fonts/FiraCodeNerdFont-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FiraCodeNerdFont-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-fira-code-nerd',
});

export const metadata: Metadata = {
  title: "Treasure You Need - Reclaim Your Time, Reclaim Your Life",
  description: "We automate the mundane so you can focus on what truly matters. Discover free tools, shortcuts, and automation solutions to save time and boost productivity.",
  keywords: ["automation", "productivity", "time-saving", "tools", "shortcuts", "efficiency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${firaCodeNerd.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
