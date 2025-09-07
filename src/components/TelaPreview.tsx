import ResumePreview from "./ResumePreview";

export default function TelaPreview({ data }: Props) {
  return (
    <div className="p-8 font-geist">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Preview do Currículo</h2>
        <p className="text-sm">
          Visualização em tempo real das suas informações
        </p>
      </div>
      <ResumePreview data={data} />
    </div>
  );
}
