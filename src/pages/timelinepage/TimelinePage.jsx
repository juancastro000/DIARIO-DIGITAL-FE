import React, {useState, useEffect} from "react";
import DiaryEntryCard from "../../components/diaryentries/DiaryEntryCard";
import useDiaryEntries from "../../hooks/UseDiaryEntries";
import NewEntryForm from "../../components/diaryentries/NewEntryForm";
import { createEntry } from "../../services/EntryService";
import "./TimelinePage.css"

const TimelinePage = () => {
  const { entries, loading, error } = useDiaryEntries(20);
  const [entryList, setEntryList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setEntryList(entries);
  }, [entries]);

  const handleAddEntry = async (entryData) => {
    try {
      const newEntry = await createEntry(entryData);
      setEntryList(prev => [newEntry, ...prev]);
      setShowForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="timeline-page">
      <h1>Mi Línea de Tiempo</h1>
      <button
        className="btn primary new-entry-btn"
        onClick={() => setShowForm(true)}
      >
        + Nueva Entrada
      </button>

      {showForm && (
        <NewEntryForm
          onSubmit={handleAddEntry}
          onCancel={() => setShowForm(false)}
        />
      )}

      {loading && <p>Cargando entradas...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="diary-entries-list">
        {entryList.map(entry => (
          <DiaryEntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;