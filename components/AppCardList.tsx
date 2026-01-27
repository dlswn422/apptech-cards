"use client";

import { useState } from "react";
import { apps } from "@/data/apps";
import AppCard from "./AppCard";

const ITEMS_PER_PAGE = 12;

export default function AppCardList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(apps.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentApps = apps.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div>
      {/* 카드 리스트 */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {currentApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2 text-sm">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-full border px-4 py-1 disabled:opacity-40"
          >
            이전
          </button>

          <span className="text-slate-500">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-full border px-4 py-1 disabled:opacity-40"
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}
