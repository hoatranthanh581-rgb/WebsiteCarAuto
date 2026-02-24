
import { GoogleGenAI } from "@google/genai";

export interface InsightResult {
  text: string;
  sources: { title: string; uri: string }[];
}

export const getAutomotiveInsights = async (topic: string): Promise<InsightResult> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return { 
        text: "Hệ thống phân tích AI đang bảo trì (Thiếu API Key). Vui lòng xem các số liệu thống kê ở trang Số Liệu.",
        sources: [] 
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Bạn là một chuyên gia kinh tế. Hãy phân tích chuyên sâu về: "${topic}". 
      Yêu cầu: Nội dung khoa học, tiếng Việt chuyên nghiệp, tập trung vào sự dịch chuyển Detroit -> Xe điện.`,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      }
    });

    const text = response.text || "Không có dữ liệu phân tích.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || "Nguồn tham khảo",
        uri: chunk.web?.uri || "#"
      })) || [];

    return { text, sources };
  } catch (error: any) {
    console.error("AI Service Error:", error);
    return { 
      text: "Không thể kết nối với trí tuệ nhân tạo lúc này. Bạn vẫn có thể đọc các bài phân tích tĩnh bên dưới.", 
      sources: [] 
    };
  }
};
