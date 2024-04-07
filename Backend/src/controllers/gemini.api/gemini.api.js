import z from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

const promptValuator = z.object({
  prompt: z.string(),
});

async function geminiApi(req, res) {
  try {
    const prompt = req.body.prompt;

    const { success } = promptValuator.safeParse({
      prompt,
    });

    if (!success) {
      return res.status(403).json({
        message: "provide prompt ",
      });
    }
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({
      text,
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "some thing went wrong",
    });
  }
}

export default geminiApi;
