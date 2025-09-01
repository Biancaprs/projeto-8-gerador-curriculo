import React from "react";
import "../App.css"

export default function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm mb-4">
      <div className="px-4 py-2 border-b">
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}