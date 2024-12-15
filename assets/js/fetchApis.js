let API_URL;

if (typeof process !== 'undefined' && process.env) {
  // Usando process.env no ambiente local
  API_URL = process.env.API_URL || 'https://instabyte-back-end-262694944609.southamerica-east1.run.app/posts';
} else if (import.meta.env) {
  // Usando import.meta.env no Netlify (e outros ambientes de build modernos)
  API_URL = import.meta.env.API_URL || 'https://instabyte-back-end-262694944609.southamerica-east1.run.app/posts';
} else {
  // Fallback caso nenhum dos métodos funcione
  API_URL = 'https://instabyte-back-end-262694944609.southamerica-east1.run.app/posts';
}

export default async function fetchImages() {
  try {
    const response = await fetch(API_URL); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}