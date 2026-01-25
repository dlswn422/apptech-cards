import AppCardList from "@/components/AppCardList";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <header className="mb-24 max-w-2xl rounded-3xl bg-gradient-to-br from-blue-50 via-white to-white p-12 shadow-sm">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-700">
          ✨ 추천인 이벤트 모음
        </span>

        <h1 className="mt-6 text-[42px] font-extrabold leading-tight text-slate-900">
          가입만 하면<br />
          <span className="text-blue-600">바로 혜택 주는</span> 이벤트
        </h1>

        <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
          신규가입만으로 바로 보상 받는<br />
          추천인 이벤트만 모았습니다.
        </p>
      </header>

      {/* 카드 리스트 */}
      <section className="rounded-[40px] bg-white px-8 py-14 shadow-sm">
        <AppCardList />
      </section>
    </main>
  );
}