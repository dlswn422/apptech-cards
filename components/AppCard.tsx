"use client";

import { AppEvent } from "@/types/app";
import { useState } from "react";

export default function AppCard({ app }: { app: AppEvent }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault(); // 카드 링크 이동 방지
    e.stopPropagation();

    if (!app.refCode) return;

    try {
      await navigator.clipboard.writeText(app.refCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("복사 실패", err);
    }
  };

  return (
    <a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative block
        no-underline text-inherit
        rounded-3xl border border-slate-200
        bg-white p-6
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Hover Gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          rounded-3xl
          bg-gradient-to-br from-blue-50/60 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Top Accent */}
      <div className="relative mb-4 h-1 w-10 rounded-full bg-blue-500" />

      {/* Logo + Name */}
      <div className="relative mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
          <img
            src={app.logo || "/logos/default.png"}
            alt={app.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {app.name}
          </h3>
          <p className="text-sm text-slate-500">
            {app.description}
          </p>
        </div>
      </div>

      {/* Meta */}
      <div className="relative space-y-1 text-sm text-slate-600">
        <div>⏱ {app.time} 소요</div>
        <div>🆕 {app.condition}</div>
      </div>

      {/* Referral Code */}
      {app.refCode && (
        <div
          onClick={handleCopy}
          className="
            relative mt-4
            flex items-center justify-between
            rounded-xl border border-dashed border-blue-300
            bg-blue-50 px-4 py-3
            cursor-pointer
            transition-all
            hover:bg-blue-100
          "
        >
          <div className="text-sm text-slate-600">
            추천 코드
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-blue-700">
              {app.refCode}
            </span>
            <span className="text-xs text-blue-600">
              {copied ? "복사됨 ✓" : "복사"}
            </span>
          </div>
        </div>
      )}

      {/* Reward + CTA */}
      <div className="relative mt-6 flex items-center justify-between">
        <div className="text-sm font-semibold text-blue-600">
          {app.reward}
        </div>

        <div
          className="
            text-sm font-medium text-slate-500
            transition-all duration-300
            group-hover:text-blue-600
            group-hover:translate-x-1
          "
        >
          지금 참여 →
        </div>
      </div>
    </a>
  );
}
