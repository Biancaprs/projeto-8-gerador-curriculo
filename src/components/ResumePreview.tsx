export default function ResumePreview({ data }: { data: any }) {
  return (
    <div className="bg-white border-black rounded-xl p-6 shadow-sm">
      <h1 className="text-2xl font-bold mb-2">{data.name || "Nome"}</h1>
      <p>
        {data.email || "email@exemplo.com"} | {data.phone || "(00) 00000-0000"}
      </p>
      <p className="mb-4">{data.linkedin || "linkedin.com/in/seu-perfil"}</p>
      <h2 className="font-semibold mb-1">Resumo</h2>
      <p className="text-slate-700">{data.summary || "Resumo"}</p>

      <hr className="my-6" />
      <h2 className="font-semibold text-lg mb-2">Experiência Profissional</h2>
      {(data.experiences && data.experiences.length > 0
        ? data.experiences
        : [
            {
              cargo: "Cargo",
              empresa: "Empresa",
              inicio: "",
              fim: "",
              atual: false,
              localizacao: "",
              remoto: false,
              descricao: "Descrição do cargo",
            },
          ]
      ).map((exp: any, idx: number) => (
        <div key={idx} className="mb-6">
          <div className="font-bold text-base">{exp.cargo || "Cargo"}</div>
          <div className="text-slate-700">{exp.empresa || "Empresa"}</div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
            <span>
              {exp.inicio
                ? new Date(exp.inicio + "-01").toLocaleString("pt-BR", {
                    month: "short",
                    year: "numeric",
                  })
                : "Mês/Ano"}{" "}
              -{" "}
              {exp.atual
                ? "Atual"
                : exp.fim
                ? new Date(exp.fim + "-01").toLocaleString("pt-BR", {
                    month: "short",
                    year: "numeric",
                  })
                : "Mês/Ano"}
            </span>
            {(exp.remoto || exp.localizacao) && (
              <>
                <span>•</span>
                {exp.remoto ? (
                  <>
                    <svg
                      className="inline-block h-4 w-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Remoto
                  </>
                ) : (
                  exp.localizacao
                )}
              </>
            )}
          </div>
          <div className="text-slate-700">{exp.descricao}</div>
        </div>
      ))}
      <hr className="my-6" />
    </div>
  );
}
