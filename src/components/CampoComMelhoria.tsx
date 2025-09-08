import { useState } from "react";
import { melhorarTextoIA } from "../server/gemini.ts";
import { clsx } from "../utils/clsx";
import { toast } from "react-toastify"; // Importa o toast

interface CampoComMelhoriaProps {
  label: string;
  valor: string;
  onChange: (valor: string) => void;
  tipo?: "input" | "textarea";
  error?: string;
}

export default function CampoComMelhoria({
  label,
  valor,
  onChange,
  tipo = "textarea",
  error,
}: CampoComMelhoriaProps) {
  const [loading, setLoading] = useState(false);

  async function handleMelhorar() {
    if (!valor) return;
    setLoading(true);
    try {
      const melhorado = await melhorarTextoIA(valor);
      onChange(melhorado);
      toast.success("Seu texto foi aprimorado com sucesso!");
    } catch (err) {
      console.error("Erro ao melhorar texto:", err);
      toast.error(
        "Não foi possível aprimorar o texto no momento. Tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  }

  const isDisabled = loading || !valor.trim();

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {tipo === "textarea" ? (
        <textarea
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            "w-full rounded-md border px-3 py-2 text-sm resize-vertical",
            error ? "border-red-400" : "border-slate-300"
          )}
        />
      ) : (
        <input
          type="text"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            "w-full rounded-md border px-3 py-2 text-sm",
            error ? "border-red-400" : "border-slate-300"
          )}
        />
      )}

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

      <button
        type="button"
        onClick={handleMelhorar}
        disabled={isDisabled}
        className={clsx(
          "bg-black text-white px-4 py-1 rounded",
          isDisabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        )}
      >
        {loading ? "Melhorando..." : "Melhorar"}
      </button>
    </div>
  );
}
