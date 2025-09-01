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
  const [experiences, setExperiences] = useState<any[]>([]);
  const [experienceDraft, setExperienceDraft] = useState<any>(null);

  return (
    <div className="grid grid-cols-2 h-screen p-4 gap-4 bg-slate-50">
      <div className="h-full overflow-y-auto pr-2">
        <TelaFormulario
          data={data}
          setData={setData}
          links={links}
          setLinks={setLinks}
          experiences={experiences}
          setExperiences={setExperiences}
          experienceDraft={experienceDraft}
          setExperienceDraft={setExperienceDraft}
        />
      </div>
      <div className="h-full overflow-y-auto pl-2">
        <TelaPreview
          data={{
            ...data,
            experiences: experienceDraft
              ? [...experiences, experienceDraft]
              : experiences,
          }}
          links={links}
        />
      </div>
    </div>
  );
}
