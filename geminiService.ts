
import { GoogleGenAI } from "@google/genai";

export interface InsightResult {
  text: string;
  sources: { title: string; uri: string }[];
}

export const getAutomotiveInsights = async (topic: string): Promise<InsightResult> => {
  try {
    // Khởi tạo instance ngay trước khi gọi để đảm bảo lấy đúng API_KEY từ process.env
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key không tồn tại trong môi trường.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Bạn là một chuyên gia kinh tế và lịch sử công nghiệp. Hãy phân tích chuyên sâu về chủ đề: "${topic}". 
      Yêu cầu:
      1. Nội dung khoa học, có số liệu minh họa (nếu có).
      2. Phân tích sự dịch chuyển từ Detroit (truyền thống) sang xe điện (hiện đại).
      3. Ngôn ngữ: Tiếng Việt chuyên sâu, chuyên nghiệp.`,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      }
    });

    const text = response.text || "Không có dữ liệu phân tích nào được trả về.";
    
    // Trích xuất nguồn từ groundingMetadata
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.filter(chunk => chunk.web)
      .map(chunk => ({
        title: chunk.web?.title || "Nguồn tham khảo",
        uri: chunk.web?.uri || "#"
      })) || [];

    return { text, sources };
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    let errorMessage = "Lỗi kết nối AI.";
    
    if (error.message?.includes("API_KEY")) {
      errorMessage = "Lỗi: API Key không hợp lệ hoặc chưa được cấu hình.";
    } else if (error.message?.includes("network") || error.message?.includes("fetch")) {
      errorMessage = "Lỗi: Vấn đề kết nối mạng. Vui lòng thử lại.";
    }

    return { 
      text: `${errorMessage}\n\nChi tiết: ${error.message || "Vui lòng kiểm tra lại cấu hình dự án."}`, 
      sources: [] 
    };
  }
};
