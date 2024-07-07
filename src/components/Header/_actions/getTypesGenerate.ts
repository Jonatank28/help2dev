// "use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyAcO9-ijf1OCO6VXV-ewCgUFsbWsHrrcc0");

export const getTypesGenerate = async () => {
  let model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
  });
  let prompt = `
  I want you to generate the typing of the object below
  {
  "nome": "João",
  "idade": 30,
  "profissao": "Desenvolvedor",
  "habilidades": ["JavaScript", "Python", "Java"],
  "endereco": {
    "rua": "Rua das Flores",
    "numero": 123,
    "cidade": "São Paulo",
    "estado": "SP"
  }
}
  `;
  let result = await model.generateContent(prompt);
  return result;
};
