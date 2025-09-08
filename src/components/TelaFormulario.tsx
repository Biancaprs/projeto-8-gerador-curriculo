import { useState } from "react";
import FormHabilidades from "./FormHabilidades";
import Experience from "./Experience";
import FormDados from "./FormDados";
import CampoComMelhoria from "./CampoComMelhoria";


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
  const [resumo, setResumo] = useState("");
  
  return (
    <div className="p-8 space-y-8 font-geist">
      <div className="text-center mb-8">
        <h1 className="h1">Gerador de Currículo Inteligente</h1>
        <p className="text-base">
          Crie seu currículo profissional com preview em tempo real
        </p>
      </div>

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
