import React from "react";
import { clsx } from "../utils/clsx";

type TextInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  error,
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">

      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none 
          ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"}`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}