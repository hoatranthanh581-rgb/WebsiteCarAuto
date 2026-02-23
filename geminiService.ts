
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export interface InsightResult {
  text: string;
  sources: { title: string; uri: string }[];
}

export const getAutomotiveInsights = async (topic: string): Promise<InsightResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Phân tích chuyên sâu về chủ đề sau trong ngành công nghiệp ô tô: ${topic}. Ngôn ngữ: Tiếng Việt.`,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      }
    });

    const text = response.text || "Không có phản hồi từ AI.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || "Nguồn tham khảo",
        uri: chunk.web?.uri || "#"
      })) || [];

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Lỗi kết nối AI.", sources: [] };
  }
};
