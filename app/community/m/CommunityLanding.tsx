"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mirchi35.pulse";

export default function CommunityLanding() {
  const [handle, setHandle] = useState<string>("");
  const [triedOpen, setTriedOpen] = useState(false);

  useEffect(() => {
    // URL: /community/m/<handle>  or  /community/m/<handle>/
    const parts = window.location.pathname.split("/").filter(Boolean);
    const idx = parts.findIndex((p) => p === "m");
    const h =
      idx >= 0 && parts[idx + 1] ? decodeURIComponent(parts[idx + 1]) : "";
    setHandle(h);

    if (!h) return;

    // Auto-attempt to open the app on first load
    const deepLink = `mirchi35://community/${h}`;
    const t = setTimeout(() => {
      window.location.href = deepLink;
      setTriedOpen(true);
    }, 300);

    return () => clearTimeout(t);
  }, []);

  const openInApp = () => {
    if (!handle) return;
    window.location.href = `mirchi35://community/${handle}`;
    setTriedOpen(true);
  };

  const openPlayStore = () => {
    window.location.href = PLAY_STORE_URL;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/Mirchi35-logo.png"
            alt="Mirchi35"
            width={88}
            height={88}
            className="rounded-2xl"
            priority
          />
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {handle ? (
            <>
              Join <span className="text-red-600">@{handle}</span>
            </>
          ) : (
            "Open Community in App"
          )}
        </h1>

        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          {triedOpen
            ? "If the app didn't open, install Mirchi35 Pulse to view this community."
            : "Open this community in the Mirchi35 Pulse app to see posts, events and offers."}
        </p>

        <div className="space-y-3">
          <button
            onClick={openInApp}
            className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-medium py-3 rounded-xl shadow-sm"
          >
            Open in App
          </button>

          <button
            onClick={openPlayStore}
            className="w-full bg-gray-900 hover:bg-black transition-colors text-white font-medium py-3 rounded-xl shadow-sm flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.585-5.418l2.402 1.387c.748.435.748 1.668 0 2.103l-2.402 1.387L15.21 12l2.874-2.874zM5.864 2.658L16.802 8.99 14.5 11.293 5.864 2.658z" />
            </svg>
            Get the App
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Mirchi35 Pulse · Local communities, live updates
        </p>
      </div>
    </main>
  );
}
