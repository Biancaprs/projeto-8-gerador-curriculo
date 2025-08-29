export default TelaFormulario;

function TelaFormulario() {
  return (
    <>
      <div>
        <h1>Gerador de Currículo Inteligente</h1>
        <p>Crie seu currículo profissional com preview em tempo real</p>
      </div>
      <div className="flex justify-center">
        <button className="border border-black">Exportar PDF</button>
        <p className="text-center">
          Preencha os campos obrigatórios para habilitar a exportação
        </p>
      </div>
      <div>
        <h2>DadosCard.tsx</h2>
      </div>
      <div>
        <h2>HabilidadesCard.tsx</h2>
      </div>
      <div>
        <h2>ExperiênciasCard.tsx</h2>
      </div>
      <div>
        <h2>FormaçãoCard.tsx</h2>
      </div>
    </>
  );
}
