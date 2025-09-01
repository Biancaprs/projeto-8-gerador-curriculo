import React, { useState } from "react";

interface Habilidade {
    id: string;
    nome: string;
    nivel: "Básico" | "Intermediário" | "Avançado";
}
 interface Props {
    habilidades: Habilidade[];
    setHabilidades: React.Dispatch<React.SetStateAction<Habilidade[]>>;
 }
export default function FormHabilidades({ habilidades, setHabilidades}:Props){
    const [nome, setNome] = useState("");
    const [nivel, setNivel] = useState<"Básico"|"Intermediário"|"Avançado">("Básico");

    function adicionarHabilidade(){
        if (nome.trim()==="") return; setHabilidades((prev)=>[
            ...prev, { id: crypto.randomUUID(), nome, nivel }
        ]);
        setNome("");
        setNivel("Básico");
    }

    function removerHabilidade(id: string) {
    setHabilidades((prev) => prev.filter((h) => h.id !== id));
  } return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Habilidades</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da habilidade"
          className="border p-2 flex-1 rounded"
        />
        <select
          value={nivel}
          onChange={(e) => setNivel(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button
          onClick={adicionarHabilidade}
          className="bg-blue-500 text-white px-3 rounded"
        >
          +
        </button>
      </div>

      <ul className="space-y-2">
        {habilidades.map((h) => (
          <li key={h.id} className="flex justify-between items-center border p-2 rounded">
            <span>{h.nome} – {h.nivel}</span>
            <button
              onClick={() => removerHabilidade(h.id)}
              className="text-red-500"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}