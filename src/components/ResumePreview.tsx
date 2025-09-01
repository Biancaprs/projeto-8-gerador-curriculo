export default function ResumePreview({ data }: { data: any }) {
  return (
    <div className="bg-white border-black rounded-xl p-6 shadow-sm">
      <h1 className="text-2xl font-bold mb-2">{data.name || "Nome"}</h1>
      <p>{data.email || "email@exemplo.com"} | {data.phone || "(00) 00000-0000"}</p>
      <p className="mb-4">{data.linkedin || "linkedin.com/in/seu-perfil"}</p>
      <h2 className="font-semibold mb-1">Resumo</h2>
      <p className="text-slate-700">{data.summary || "Resumo"}</p>
    </div>
  );
}