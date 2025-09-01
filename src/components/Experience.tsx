import { useState } from "react";
import SectionCard from "./SectionCard";
import TextInput from "./TextInput";

type ExperienceData = {
  empresa: string;
  cargo: string;
  localizacao: string;
  remoto: boolean;
  inicio: string;
  fim: string;
  atual: boolean;
  descricao: string;
};

const initialData: ExperienceData = {
  empresa: "",
  cargo: "",
  localizacao: "",
  remoto: false,
  inicio: "",
  fim: "",
  atual: false,
  descricao: "",
};

type ExperienceProps = {
  experiences: ExperienceData[];
  setExperiences: (exps: ExperienceData[]) => void;
  experienceDraft: ExperienceData | null;
  setExperienceDraft: (exp: ExperienceData | null) => void;
};

export default function Experience({
  experiences,
  setExperiences,
  setExperienceDraft,
}: ExperienceProps) {
  const [data, setData] = useState<ExperienceData>(initialData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  function update(key: keyof ExperienceData, value: any) {
    const newData = { ...data, [key]: value };
    setData(newData);
    setExperienceDraft(newData);
  }

  function handleAdd() {
    setExperiences([...experiences, data]);
    setData(initialData);
    setShowForm(false);
    setExperienceDraft(null);
    setEditingIndex(null);
  }

  function handleEdit(idx: number) {
    setEditingIndex(idx);
    setData(experiences[idx]);
    setShowForm(true);
    setExperienceDraft(experiences[idx]);
  }

  function handleSaveEdit() {
    if (editingIndex !== null) {
      const updated = [...experiences];
      updated[editingIndex] = data;
      setExperiences(updated);
      setEditingIndex(null);
      setData(initialData);
      setShowForm(false);
      setExperienceDraft(null);
    }
  }

  function handleRemove(idx: number) {
    setExperiences(experiences.filter((_, i) => i !== idx));
    // Se estiver editando o mesmo índice, limpe o draft e feche o form
    if (editingIndex === idx) {
      setEditingIndex(null);
      setData(initialData);
      setShowForm(false);
      setExperienceDraft(null);
    }
  }

  function handleCancel() {
    setEditingIndex(null);
    setData(initialData);
    setShowForm(false);
    setExperienceDraft(null);
  }

  return (
    <SectionCard title="Experiência Profissional">
      <button
        className="mb-4 px-4 py-2 rounded bg-gray-100 border border-gray-300"
        onClick={() => {
          setShowForm(true);
          setEditingIndex(null);
          setData(initialData);
          setExperienceDraft(initialData);
        }}
      >
        + Adicionar Experiência
      </button>

      {showForm && (
        <div className="mb-4 p-4 border-2 border-dashed border-purple-400 rounded">
          <div className="flex gap-2">
            <TextInput
              label="Empresa*"
              placeholder="Nome da empresa"
              value={data.empresa}
              onChange={(e) => update("empresa", e.target.value)}
            />
            <TextInput
              label="Cargo*"
              placeholder="Seu cargo"
              value={data.cargo}
              onChange={(e) => update("cargo", e.target.value)}
            />
          </div>
          <div className="flex gap-2 mt-2">
            <TextInput
              label="Localização (opcional)"
              placeholder="Cidade/UF"
              value={data.localizacao}
              onChange={(e) => update("localizacao", e.target.value)}
            />
            <label className="flex items-center gap-1 text-sm mt-6">
              <input
                type="checkbox"
                checked={data.remoto}
                onChange={(e) => update("remoto", e.target.checked)}
              />
              Trabalho remoto
            </label>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Data de Início
              </label>
              <input
                className="border px-2 py-1 rounded w-full"
                type="month"
                value={data.inicio}
                onChange={(e) => update("inicio", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Data de Fim
              </label>
              <input
                className="border px-2 py-1 rounded w-full"
                type="month"
                value={data.fim}
                onChange={(e) => update("fim", e.target.value)}
                disabled={data.atual}
              />
            </div>
          </div>
          <label className="flex items-center gap-1 text-sm mt-2">
            <input
              type="checkbox"
              checked={data.atual}
              onChange={(e) => update("atual", e.target.checked)}
            />
            Trabalho atual
          </label>
          <div className="mt-2">
            <label className="block text-sm font-medium mb-1">
              Descrição das Atividades
            </label>
            <textarea
              className="border px-2 py-1 rounded w-full"
              placeholder="Descreva suas principais responsabilidades e conquistas..."
              value={data.descricao}
              onChange={(e) => update("descricao", e.target.value)}
            />
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

      {experiences.length > 0 && (
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-1 relative"
            >
              <div className="font-bold text-base">{exp.cargo}</div>
              <div className="text-slate-700">{exp.empresa}</div>
              <div className="text-slate-500 text-sm">
                {exp.remoto ? "Remoto" : exp.localizacao}
              </div>
              <div className="text-slate-500 text-sm">
                {exp.inicio
                  ? new Date(exp.inicio + "-01").toLocaleString("pt-BR", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Mês/Ano"}{" "}
                -{" "}
                {exp.atual
                  ? "Atual"
                  : exp.fim
                  ? new Date(exp.fim + "-01").toLocaleString("pt-BR", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Mês/Ano"}
              </div>
              <div className="text-slate-700">{exp.descricao}</div>
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
      )}
    </SectionCard>
  );
}
