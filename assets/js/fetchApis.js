const API_URL = "https://instabyte-back-end-262694944609.southamerica-east1.run.app/posts";

export default async function fetchImages() {
  try {
    const response = await fetch(API_URL, {
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
