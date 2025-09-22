import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string;

if (!apiKey) {
  throw new Error("Gemini API key não encontrada no .env");
}

console.log("🔑 API Key encontrada?", !!apiKey);

const genAI = new GoogleGenerativeAI(apiKey);

export async function melhorarTextoIA(texto: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(
      `Melhore o texto abaixo para uso em um currículo, focando em clareza, concisão e profissionalismo. Não invente ou adicione informações novas.

     Texto:
      "${texto}"

      Instruções:
      - Resuma de forma objetiva e profissional, usando palavras-chave relevantes.
      - Use verbos de ação e quantifique resultados sempre que possível.
      - Corrija erros de gramática, ortografia e melhore a fluidez.
      - Otimize para impacto e densidade informacional, mantendo naturalidade e clareza.`
    );

    return result.response.text();
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return texto;
  }
}
