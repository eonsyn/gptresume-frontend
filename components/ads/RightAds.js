"use client";

import { useEffect } from "react";

const RightAds = () => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="sticky top-5 z-40 w-full p-4 rounded-xl bg-[var(--card-background)] border border-[var(--border)] shadow-md">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-2404358914933411"
        data-ad-slot="2785331387"
      />
    </div>
  );
};

export default RightAds;
 