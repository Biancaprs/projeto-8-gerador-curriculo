import React from "react";
import { clsx } from "../utils/clsx";

export default function TextArea({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        {...props}
        className={clsx(
          "w-full rounded-md border px-3 py-2 text-sm resize-vertical",
          error ? "border-red-400" : "border-slate-300"
        )}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
