import type React from "react";
import FormHabilidades from "../FormHabilidades";
import Experience from "./Experience";
import FormDados from "./FormDados";

interface Habilidade {
  id: string;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

interface ExperienceData {
  empresa: string;
  cargo: string;
  localizacao: string;
  remoto: boolean;
  inicio: string;
  fim: string;
  atual: boolean;
  descricao: string;
}

interface Props {
  habilidades: Habilidade[];
  setHabilidades: React.Dispatch<React.SetStateAction<Habilidade[]>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  experiences: ExperienceData[];
  setExperiences: React.Dispatch<React.SetStateAction<ExperienceData[]>>;
  experienceDraft: ExperienceData | null;
  setExperienceDraft: React.Dispatch<
    React.SetStateAction<ExperienceData | null>
  >;
}

export default function TelaFormulario({
  habilidades,
  setHabilidades,
  data,
  setData,
  experiences,
  setExperiences,
  experienceDraft,
  setExperienceDraft,
}: Props) {
  return (
    <div className="p-8 space-y-8 font-geist">
      <div className="text-center mb-8">
        <h1 className="h1">Gerador de Currículo Inteligente</h1>
        <p className="text-base">
          Crie seu currículo profissional com preview em tempo real
        </p>
      </div>
      {/* <div className="flex justify-center mb-6">
        <button className="exportar-button has-[>svg]: px-4 outline-none shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-download  h-4 w-4"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          Exportar PDF
        </button>
        <p className="text-center text-sm mt-2 ml-2">
          Preencha os campos obrigatórios para habilitar a exportação
        </p>
      </div> */}
      <div className="bg-bg-[var(--cor-bg)]">
        <FormDados data={data} setData={setData} />
        <Experience
          experiences={experiences ?? []}
          setExperiences={setExperiences}
          experienceDraft={experienceDraft}
          setExperienceDraft={setExperienceDraft}
        />
        <FormHabilidades
          habilidades={habilidades}
          setHabilidades={setHabilidades}
        />
      </div>
    </div>
  );
}
