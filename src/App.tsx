import TelaFormulario from "./components/TelaFormulario";
import TelaPreview from "./components/TelaPreview";
import "./App.css";
import { useState } from "react";

interface Habilidade {
  id: string;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

function App() {
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);
  return (
    <div className="min-h-screen bg-[var(--cor-bg)]">
      <div className="flex h-screen">
        <div className="w-1/2 border-r border-[var(--cor-border)] overflow-y-scroll">
          <TelaFormulario habilidades={habilidades} setHabilidades={setHabilidades} />
        </div>
        <div className="w-1/2 overflow-y-auto bg-[var(--bg-preview)]">
          <TelaPreview habilidades={habilidades} />
        </div>
      </div>
    </div>
  );
}

export default App;
