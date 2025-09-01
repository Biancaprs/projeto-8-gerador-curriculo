import ResumePreview from "./ResumePreview";

interface Habilidade {
  id: string;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

interface Props {
  data: any;
  links: any;
  habilidades: Habilidade[];
}

export default function TelaPreview({ data, habilidades }: Props) {
  return (
    <div className="p-8 font-geist">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Preview do Currículo</h2>
        <p className="text-sm">
          Visualização em tempo real das suas informações
        </p>
      </div>
      <ResumePreview data={data} />

      {/* habilidades */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Habilidades</h3>
        {habilidades.length === 0 ? (
          <p className="text-gray-400 italic">Nenhuma habilidade adicionada</p>
        ) : (
          <ul className="list-disc pl-6 space-y-1 text-left">
            {habilidades.map((h) => (
              <li key={h.id}>
                {h.nome} – <span className="italic">{h.nivel}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
