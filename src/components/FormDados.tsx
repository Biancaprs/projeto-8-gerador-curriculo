import SectionCard from "./SectionCard";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import { MAX_SUMMARY_CHARS, validate } from "../utils/validation";
import LinksAdicionais from "../components/LinksAdicionais";

export default function FormDados({ data, setData, links, setLinks }) {
  const errors = validate(data);

  function update(key: string, value: string) {
    setData({ ...data, [key]: value });
  }

  return (
    <SectionCard title="Dados Pessoais">
      <TextInput
        label="Nome Completo*"
        placeholder="Seu nome completo"
        value={data.name}
        onChange={(e) => update("name", e.target.value)}
        error={errors.name}
      />
      <TextInput
        label="Email*"
        placeholder="email@exemplo.com"
        value={data.email}
        onChange={(e) => update("email", e.target.value)}
        error={errors.email}
      />
      <TextInput
        label="Telefone*"
        placeholder="(11)99999-9999"
        value={data.phone}
        onChange={(e) => update("phone", e.target.value)}
        error={errors.phone}
      />
      <TextInput
        label="Linkedin"
        placeholder="linkedin.com/in/seuperfil"
        value={data.linkedin}
        onChange={(e) => update("linkedin", e.target.value)}
        error={errors.linkedin}
      />
      <form className="space-y-4 p-4">
        <LinksAdicionais links={links} setLinks={setLinks} />
      </form>
      <TextArea
        label="Resumo Profissional"
        placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
        value={data.summary}
        onChange={(e) => update("summary", e.target.value)}
        error={errors.summary}
      />
      <p className="text-xs text-slate-500 mt-1">
        {data.summary.length}/{MAX_SUMMARY_CHARS}
      </p>
    </SectionCard>
  );
}
