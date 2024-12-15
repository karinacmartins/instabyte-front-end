let API_URL;

if (typeof process !== 'undefined' && process.env) {
  // Usando process.env no ambiente local
  API_URL = process.env.API_URL || 'https://fallback-url.com';
} else if (import.meta.env) {
  // Usando import.meta.env no Netlify (e outros ambientes de build modernos)
  API_URL = import.meta.env.API_URL || 'https://fallback-url.com';
} else {
  // Fallback caso nenhum dos métodos funcione
  API_URL = 'https://fallback-url.com';
}

export default async function fetchImages() {
  try {
    const response = await fetch(API_URL); // Usando a URL da variável de ambiente
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}