import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD. Ashikur Rahaman | Blockchain Researcher & Web3 Builder",
  description: "Personal portfolio of MD. Ashikur Rahaman - Blockchain Researcher, Crypto Educator, and Web3 Builder. Building the future through blockchain, AI, research, and digital innovation.",
  keywords: ["blockchain", "web3", "crypto", "research", "AI", "developer", "portfolio"],
  authors: [{ name: "MD. Ashikur Rahaman" }],
  openGraph: {
    title: "MD. Ashikur Rahaman | Blockchain Researcher & Web3 Builder",
    description: "Building the future through blockchain, AI, research, and digital innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
