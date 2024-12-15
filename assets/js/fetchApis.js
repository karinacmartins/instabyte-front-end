const API_URL = process.env.API_URL;

export default async function fetchImages() {
  try {
    const response = await fetch(API_URL); // Usando a URL da variável de ambiente
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}