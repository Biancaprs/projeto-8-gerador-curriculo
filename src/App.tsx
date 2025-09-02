import { useState } from "react";
import TelaFormulario from "./components/TelaFormulario";
import TelaPreview from "./components/TelaPreview";
interface Habilidade {
  id: string;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}
export default function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
  });
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);
  const [experienceDraft, setExperienceDraft] = useState<any>({});
  const [links] = useState<any[]>([]);

  return (
    <div className="grid grid-cols-2 h-screen p-4 gap-4 bg-slate-50">
      <div className="h-full overflow-y-auto pr-2">
        <TelaFormulario
          habilidades={habilidades}
          setHabilidades={setHabilidades}
          data={data}
          setData={setData}
          experiences={experiences}
          setExperiences={setExperiences}
          experienceDraft={experienceDraft}
          setExperienceDraft={setExperienceDraft}
        />
      </div>
      <div className="h-full overflow-y-auto pr-2">
        <TelaPreview
          data={{
            ...data,
            experiences:
              experienceDraft && Object.values(experienceDraft).some(Boolean)
                ? [...experiences, experienceDraft]
                : experiences,
          }}
          habilidades={habilidades}
          links={links}
        />
      </div>
    </div>
  );
}
