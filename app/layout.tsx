import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "추천인 이벤트 모음 | 가입만 해도 혜택",
  description:
    "신규가입만으로 포인트·캐시·현금 혜택을 받을 수 있는 추천인 이벤트를 한 곳에 모았습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>

          <footer className="border-t bg-white py-6 text-center text-xs text-slate-400">
            본 사이트는 쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
          </footer>
        </div>
      </body>
    </html>
  );
}