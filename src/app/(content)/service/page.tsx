"use client";

export default function OverlapCardsFullScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center px-0 py-0 overflow-hidden">
      <div className="relative flex items-start justify-center w-screen h-screen">
        {/* Card Kiri */}
        <div className="w-1/2 h-full rounded-none p-6 z-10">
          <div className="h-full w-full"></div>
        </div>

        {/* Card Kanan (di-overlap ke kiri) */}
        <div className="w-1/2 h-full rounded-none p-6 z-10 -ml-10">
          <div className="h-full w-full"></div>
        </div>
      </div>
    </div>
  );
}
