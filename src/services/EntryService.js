import Cookies from "js-cookie";
const API_URL = "http://localhost:8080/api/v1";


export const getDiaryEntries = async (limit = 20) => {
    const token = Cookies.get('token');
    const response = await fetch(`${API_URL}/entry?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` }),
      },
    });
    if (!response.ok) {
      throw new Error("Error al obtener las entradas");
    }
    return response.json();
  };