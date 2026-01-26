import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "추천인 이벤트 모음 | 가입만 하면 바로 혜택",
  description:
    "신규가입만으로 바로 혜택 받는 추천인 이벤트 모음. 앱테크, 포인트, 캐시 이벤트를 한눈에 확인하세요.",
  keywords: [
    "추천인 이벤트",
    "앱테크",
    "신규가입 이벤트",
    "포인트 적립",
    "캐시 이벤트",
  ],
  openGraph: {
    title: "추천인 이벤트 모음",
    description: "가입만 하면 바로 혜택 주는 추천인 이벤트",
    url: "https://apptech-cards.vercel.app",
    siteName: "추천인 이벤트 모음",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* ✅ 네이버 서치어드바이저 소유 확인 */}
        <meta
          name="naver-site-verification"
          content="e32b07a39ac79958d5897d4d0c5d6934843823f1"
        />
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          {/* 메인 콘텐츠 */}
          <main className="flex-1">{children}</main>

          {/* 푸터 */}
          <footer className="border-t bg-white py-6 text-center text-xs text-slate-400">
            본 사이트는 쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
          </footer>
        </div>
      </body>
    </html>
  );
}
