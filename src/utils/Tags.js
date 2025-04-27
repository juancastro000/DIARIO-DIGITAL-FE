export const tagMapper = {
    1: "Personal",
    2: "Trabajo",
    3: "Salud",
    4: "Ocio",
    5: "Finanzas",
    6:"Aprendizaje",
    7:"Familia",
    8:"Deporte",
  };
  
  export const tagOptions = Object.entries(tagMapper).map(([id, label]) => ({
    id: Number(id),
    label,
  }));