import SectionCard from "./SectionCard";
import TextInput from "./TextInput";
import CampoComMelhoria from "./CampoComMelhoria";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { MAX_SUMMARY_CHARS, validate } from "../utils/validation";

type DadosPessoais = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  [key: string]: string;
};

type FormDadosProps = {
  data: DadosPessoais;
  setData: (data: DadosPessoais) => void;
  loading?: boolean; // ✅ nova prop
};

export default function FormDados({ data, setData, loading = false }: FormDadosProps) {
  const errors = validate(data);

  function update(key: string, value: string) {
    setData({ ...data, [key]: value });
  }

  return (
    <SectionCard title="Dados Pessoais">
      {loading ? (
        <>
          <Skeleton height={20} width={150} className="mb-2" />
          <Skeleton height={40} className="mb-4" />

          <Skeleton height={20} width={150} className="mb-2" />
          <Skeleton height={40} className="mb-4" />

          <Skeleton height={20} width={150} className="mb-2" />
          <Skeleton height={40} className="mb-4" />

          <Skeleton height={20} width={150} className="mb-2" />
          <Skeleton height={40} className="mb-4" />

          <Skeleton height={20} width={180} className="mb-2" />
          <Skeleton height={100} className="mb-2" />

          <Skeleton height={14} width={80} />
        </>
      ) : (
        <>
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

          <CampoComMelhoria
            label="Resumo Profissional"
            valor={data.summary}
            onChange={(valor) => update("summary", valor)}
            tipo="textarea"
            error={errors.summary}
          />

          <p className="text-xs text-slate-500 mt-1">
            {data.summary.length}/{MAX_SUMMARY_CHARS}
          </p>
        </>
      )}
    </SectionCard>
  );
}
