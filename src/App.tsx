import { useState } from "react";
import TelaFormulario from "./components/TelaFormulario";
import TelaPreview from "./components/TelaPreview";

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

  return (
    <div className="grid grid-cols-2 h-screen p-4 gap-4 bg-slate-50">
      <TelaFormulario
        data={data}
        setData={setData}
        links={links}
        setLinks={setLinks}
      />
      <TelaPreview data={data} links={links} />
    </div>
  );
}
