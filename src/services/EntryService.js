import Cookies from "js-cookie";
const API_URL = "http://localhost:8080/api/v1";


export const getEntries = async (limit = 20) => {
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

  export const createEntry = async (entryData) => {
    const token = Cookies.get('token');
    const response = await fetch(`${API_URL}/entry`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` }),
      },
      body: JSON.stringify(entryData),
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || 'Error creating entry');
    }
    return response.json();
  };

  export const updateEntry = async (id, entryData) => {
    const token = Cookies.get('token');
    const response = await fetch(`${API_URL}/entry/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` }),
      },
      body: JSON.stringify(entryData),
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || 'Error updating entry');
    }
    return response.json();
  };
  
  export const deleteEntry = async (id) => {
    const token = Cookies.get('token');
    const response = await fetch(`${API_URL}/entry/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}` }),
      },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || 'Error deleting entry');
    }
  };