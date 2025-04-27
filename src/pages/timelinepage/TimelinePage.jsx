import React, {useState, useEffect} from "react";
import DiaryEntryCard from "../../components/diaryentries/DiaryEntryCard";
import useTimelineLogic from "../../hooks/useTimeline";
import NewEntryForm from "../../components/diaryentries/NewEntryForm";
import EditEntryForm from "../../components/diaryentries/EditEntryForm";
import "./TimelinePage.css"

const TimelinePage = () => {
  const {
    entries,
    loading,
    error,
    showNewForm,
    editingEntry,
    handleAddEntry,
    handleEditClick,
    handleUpdateEntry,
    handleDeleteEntry,
    toggleNewForm,
    cancelEditing
  } = useTimelineLogic(20);

  return (
    <div className="timeline-page">
      <h1>Mi Línea de Tiempo</h1>
      <div className="form-toggle-buttons">
        <button className="btn primary" onClick={toggleNewForm}>
          + Nueva Entrada
        </button>
      </div>

      {showNewForm && <NewEntryForm onSubmit={handleAddEntry} onCancel={toggleNewForm} />}
      {editingEntry && <EditEntryForm initialData={editingEntry} onSubmit={handleUpdateEntry} onCancel={cancelEditing} />}

      {loading && <p>Cargando entradas...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="diary-entries-list">
        {entries.map(entry => (
          <DiaryEntryCard
            key={entry.id}
            entry={entry}
            onEdit={handleEditClick}
            onDelete={handleDeleteEntry}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;