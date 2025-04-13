import React from "react";
import DiaryEntryCard from "../../components/diaryentries/DiaryEntryCard";
import useDiaryEntries from "../../hooks/UseDiaryEntries";
import "./TimelinePage.css"

const TimelinePage = () => {
  const { entries, loading, error } = useDiaryEntries(20);

  return (
    <div className="timeline-page">
      <h1>Mi Línea de Tiempo</h1>
      
      {loading && <p>Cargando entradas...</p>}
      {error && <p>{error}</p>}
      
      <div className="diary-entries-list">
        {entries.map((entry) => (
          <DiaryEntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;