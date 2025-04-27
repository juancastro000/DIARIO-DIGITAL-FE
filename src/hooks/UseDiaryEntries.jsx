import { useState, useEffect } from "react";
import { getEntries } from "../services/EntryService";

const useDiaryEntries = (limit = 20) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);
        const data = await getEntries(limit);
        setEntries(data);
      } catch (err) {
        setError("Error al obtener las entradas del diario");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, [limit]);

  return { entries, loading, error };
};

export default useDiaryEntries;