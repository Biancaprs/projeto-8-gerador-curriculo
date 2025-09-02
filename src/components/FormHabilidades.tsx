import React, { useState } from "react";
import SectionCard from "./SectionCard";
import TextInput from "./TextInput";
import { FaPen } from "react-icons/fa";

interface Habilidade {
  id: string;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

interface Props {
  habilidades: Habilidade[];
  setHabilidades: React.Dispatch<React.SetStateAction<Habilidade[]>>;
}

export default function FormHabilidades({ habilidades, setHabilidades }: Props) {
  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState<"Básico" | "Intermediário" | "Avançado">("Básico");
  const [editandoId, setEditandoId] = useState<string | null>(null);

  function adicionarOuEditarHabilidade() {
    if (nome.trim() === "") return;

    if (editandoId) {
      setHabilidades((prev) =>
        prev.map((h) =>
          h.id === editandoId ? { ...h, nome, nivel } : h
        )
      );
      setEditandoId(null);
    } else {
      setHabilidades((prev) => [
        ...prev,
        { id: crypto.randomUUID(), nome, nivel }
      ]);
    }

    setNome("");
    setNivel("Básico");
  }

  function removerHabilidade(id: string) {
    setHabilidades((prev) => prev.filter((h) => h.id !== id));
    if (editandoId === id) {
      setEditandoId(null);
      setNome("");
      setNivel("Básico");
    }
  }

  function editarHabilidade(habilidade: Habilidade) {
    setEditandoId(habilidade.id);
    setNome(habilidade.nome);
    setNivel(habilidade.nivel);
  }

  return (
    <SectionCard title="Habilidades">
      <div className="flex gap-2 mb-4">
        <TextInput
          label="Nome da habilidade"
          placeholder="Ex: JavaScript"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <div className="flex flex-col w-40">
          <label className="text-sm font-medium text-slate-700 mb-1">
            Nível
          </label>
          <select
            value={nivel}
            onChange={(e) =>
              setNivel(e.target.value as "Básico" | "Intermediário" | "Avançado")
            }
            className="border rounded p-2 text-sm"
          >
            <option value="Básico">Básico</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>

        <button
          type="button"
          onClick={adicionarOuEditarHabilidade}
          className={`self-end ${editandoId ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded text-sm font-medium`}
        >
          {editandoId ? "Salvar" : "Adicionar"}
        </button>
      </div>

      <ul className="space-y-2">
        {habilidades.map((h) => (
          <li
            key={h.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span className="text-sm">
              {h.nome} – {h.nivel}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => editarHabilidade(h)}
                className="text-yellow-500 hover:text-yellow-600 text-sm"
                title="Editar"
              >
                <FaPen />
              </button>
              <button
                onClick={() => removerHabilidade(h.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
