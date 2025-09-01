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
    links: "",
    summary: "",
  });
  const [links, setLinks] = useState<{ title: string; url: string }[]>([]);
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

  return (
    <div className="grid grid-cols-2 h-screen p-4 gap-4 bg-slate-50">
      <TelaFormulario habilidades={habilidades} setHabilidades={setHabilidades}
        data={data}
        setData={setData}
        links={links}
        setLinks={setLinks}
      />
      <TelaPreview habilidades={habilidades} data={data} links={links} />
    </div>
  );
}
