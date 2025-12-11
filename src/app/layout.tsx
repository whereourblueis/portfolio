import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Background from "@/components/ui/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이수현 | 프론트엔드 개발자 포트폴리오",
  description:
    "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 이수현의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "개발자",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
  ],
  authors: [{ name: "이수현" }],
  openGraph: {
    title: "이수현 | 프론트엔드 개발자 포트폴리오",
    description:
      "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 이수현의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}