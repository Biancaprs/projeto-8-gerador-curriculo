import TelaFormulario from "./components/TelaFormulario";
import TelaPreview from "./components/TelaPreview";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen">
        <div className="w-1/2 border-r border-black overflow-y-auto">
          <TelaFormulario />
        </div>
        <div className="w-1/2 overflow-y-auto">
          <TelaPreview />
        </div>
      </div>
    </div>
  );
}

export default App;
