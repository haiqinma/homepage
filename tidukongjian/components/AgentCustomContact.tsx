"use client";

import { useState } from "react";

export default function AgentCustomContact() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative z-10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="rounded-full px-3 py-2 text-sm font-bold text-black transition-colors hover:bg-white/70 sm:text-base"
        style={{ fontFamily: "KaiTi, STKaiti, serif" }}
      >
        智能体开发定制，500元起
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 rounded-xl border border-red-100 bg-white p-5 text-left shadow-2xl">
          <div className="space-y-2 text-sm leading-relaxed text-gray-700">
            <p>邮箱：tidukongjian@163.com</p>
            <p>手机号/微信同号：17706514288</p>
          </div>
        </div>
      )}
    </div>
  );
}
