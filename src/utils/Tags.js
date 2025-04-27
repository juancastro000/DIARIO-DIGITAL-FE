export const tagMapper = {
    1: "Salud",
    2: "Trabajo",
    3: "Familia",
    4: "Deporte",
    5: "Entretenimiento",
  };
  
  export const tagOptions = Object.entries(tagMapper).map(([id, label]) => ({
    id: Number(id),
    label,
  }));