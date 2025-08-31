import TelaFormulario from "./components/TelaFormulario";
import TelaPreview from "./components/TelaPreview";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[var(--cor-bg)]">
      <div className="flex h-screen">
        <div className="w-1/2 border-r border-[var(--cor-border)] overflow-y-scroll">
          <TelaFormulario />
        </div>
        <div className="w-1/2 overflow-y-auto bg-[var(--bg-preview)]">
          <TelaPreview />
        </div>
      </div>
    </div>
  );
}

export default App;
