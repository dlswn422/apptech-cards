"use client";

import { AppEvent } from "@/types/app";

export default function AppCard({ app }: { app: AppEvent }) {
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