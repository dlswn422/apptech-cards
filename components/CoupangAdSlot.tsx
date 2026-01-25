"use client";

import { useEffect, useRef } from "react";

export default function CoupangAdSlot() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    // 기존 광고 제거 (페이지 이동 시 중복 방지)
    adRef.current.innerHTML = "";

    // script 생성
    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.PartnersCoupang.G({
        id: 960436,
        template: "carousel",
        trackingCode: "AF4762293",
        width: "680",
        height: "140",
      });
    };

    adRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center">
      {/* 🔒 이 div 안에서만 광고가 렌더됨 */}
      <div ref={adRef} className="overflow-hidden" />
    </div>
  );
}