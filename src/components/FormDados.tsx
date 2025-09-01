import SectionCard from "./SectionCard";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { useState } from "react";
import { MAX_SUMMARY_CHARS, validate } from "../utils/validation";
import ResumePreview from "./ResumePreview";
import LinksAdicionais from "../components/LinksAdicionais";


export default function FormDados() {
  const [data, setData] = useState({ name: "", email: "", phone: "", linkedin: "", links: "", summary: "" });
  const errors = validate(data);

  const [links, setLinks] = useState<{ title: string; url: string }[]>([]);

  function update(key: string, value: string) {
    setData({ ...data, [key]: value });

    React.useEffect(() => {
    update("links", links);
  }, [links]);
  }
  

  return (
    <div className="grid grid-cols-2 h-screen p-4 gap-4 bg-slate-50">
      {/* Formulário */}
      <div className="overflow-y-auto">
        <SectionCard title="Dados Pessoais">
          <TextInput
          label= "Nome Completo*"
          placeholder="Seu nome completo" 
          value={data.name} 
          onChange={e => update("name", e.target.value)} 
          error={errors.name} 
          />

          <TextInput 
          label= "Email*"
          placeholder="email@exemplo.com" 
          value={data.email} 
          onChange={e => update("email", e.target.value)} 
          error={errors.email} 
          />

          <TextInput 
          label= "Telefone*"
          placeholder="(11)99999-9999" 
          value={data.phone} 
          onChange={e => update("phone", e.target.value)} 
          error={errors.phone} 
          />

          <TextInput 
          label= "Linkedin"
          placeholder="linkedin.com/in/seuperfil" 
          value={data.linkedin} 
          onChange={e => update("linkedin", e.target.value)} 
          error={errors.linkedin} 
          />

          <form className="space-y-4 p-4">
            <LinksAdicionais 
            links={links} 
            setLinks={setLinks} 
            />
          </form>
          
          <TextArea
          label= "Resumo Profissional"
          placeholder="Descreva brevemente sua experiência e objetivos profissionais..." 
          value={data.summary} 
          onChange={e => update("summary", e.target.value)} 
          error={errors.summary} 
          />
          <p className="text-xs text-slate-500 mt-1">
            {data.summary.length}/{MAX_SUMMARY_CHARS}
          </p>

        </SectionCard>
      </div>

      {/* Preview */}
      <div className="overflow-y-auto">
        <ResumePreview data={data} />
      </div>
    </div>
  );
}