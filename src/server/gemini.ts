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
      `Melhore a clareza e profissionalismo do seguinte texto para um currículo, sem inventar informações: "${texto}"`
    );

    return result.response.text();
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return texto; 
  }
}
