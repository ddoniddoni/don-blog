import type { Metadata } from "next";
import "../assets/styles/ui.scss";

export const metadata: Metadata = {
  title: "Don Blog",
  description: "Don의 잡다한 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
