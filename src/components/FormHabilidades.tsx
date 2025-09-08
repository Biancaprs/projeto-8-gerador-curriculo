import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import SectionCard from "./SectionCard";
import TextInput from "./TextInput";

interface Habilidade {
  id: string;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

interface Props {
  habilidades: Habilidade[];
  setHabilidades: React.Dispatch<React.SetStateAction<Habilidade[]>>;
  loading?: boolean; // 👈 Adicionado suporte à prop loading
}

const initialData: Habilidade = {
  id: "",
  nome: "",
  nivel: "Básico",
};

export default function FormHabilidades({
  habilidades,
  setHabilidades,
  loading = false, // 👈 valor padrão
}: Props) {
  const [data, setData] = useState<Habilidade>(initialData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  function update(key: keyof Habilidade, value: any) {
    setData({ ...data, [key]: value });
    if (key === "nome" && value.trim() !== "") {
      setError("");
    }
  }

  function handleAdd() {
    if (data.nome.trim() === "") {
      setError("O nome da habilidade é obrigatório.");
      return;
    }
    setHabilidades([...habilidades, { ...data, id: Date.now().toString() }]);
    resetForm();
  }

  function handleEdit(idx: number) {
    setEditingIndex(idx);
    setData(habilidades[idx]);
    setShowForm(true);
    setError("");
  }

  function handleSaveEdit() {
    if (editingIndex !== null) {
      const updated = [...habilidades];
      updated[editingIndex] = data;
      setHabilidades(updated);
      resetForm();
    }
  }

  function handleRemove(idx: number) {
    setHabilidades(habilidades.filter((_, i) => i !== idx));
    if (editingIndex === idx) {
      resetForm();
    }
  }

  function handleCancel() {
    resetForm();
  }

  function resetForm() {
    setEditingIndex(null);
    setData(initialData);
    setShowForm(false);
    setError("");
  }

  return (
    <SectionCard title="Habilidades">
      <button
        className="mb-4 px-4 py-2 rounded bg-gray-100 border border-gray-300"
        onClick={() => {
          setShowForm(true);
          setEditingIndex(null);
          setData(initialData);
          setError("");
        }}
      >
        + Adicionar Habilidade
      </button>

      {showForm && (
        <div className="mb-4 p-4 border-2 border-dashed border-purple-400 rounded">
          <div className="flex gap-2">
            <div className="flex-1">
              <TextInput
                label="Nome da habilidade*"
                placeholder="Ex: JavaScript"
                value={data.nome}
                onChange={(e) => update("nome", e.target.value)}
                error={error}
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Nível</label>
              <select
                value={data.nivel}
                onChange={(e) =>
                  update(
                    "nivel",
                    e.target.value as "Básico" | "Intermediário" | "Avançado"
                  )
                }
                className="border rounded px-2 py-1 w-full"
              >
                <option value="Básico">Básico</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {editingIndex === null ? (
              <button
                className="bg-black text-white px-4 py-1 rounded"
                onClick={handleAdd}
              >
                Adicionar
              </button>
            ) : (
              <button
                className="bg-black text-white px-4 py-1 rounded"
                onClick={handleSaveEdit}
              >
                Salvar
              </button>
            )}
            <button
              className="bg-white border px-4 py-1 rounded"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* ⬇️ Lista de habilidades OU Skeleton ⬇️ */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
            >
              <div className="w-full">
                <Skeleton height={20} width="40%" />
                <Skeleton height={16} width="30%" className="mt-1" />
              </div>
            </div>
          ))}
        </div>
      ) : habilidades.length > 0 ? (
        <div className="space-y-4">
          {habilidades.map((h, idx) => (
            <div
              key={h.id}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-center relative"
            >
              <div>
                <div className="font-bold text-base">{h.nome}</div>
                <div className="text-slate-700 text-sm">{h.nivel}</div>
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  className="text-blue-600"
                  onClick={() => handleEdit(idx)}
                  title="Editar"
                >
                  ✎
                </button>
                <button
                  className="text-red-600"
                  onClick={() => handleRemove(idx)}
                  title="Remover"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </SectionCard>
  );
}
