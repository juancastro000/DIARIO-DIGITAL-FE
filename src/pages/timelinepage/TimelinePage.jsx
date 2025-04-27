import React from "react";
import DiaryEntryCard from "../../components/diaryentries/DiaryEntryCard";
import useTimelineLogic from "../../hooks/useTimeline";
import NewEntryForm from "../../components/diaryentries/NewEntryForm";
import EditEntryForm from "../../components/diaryentries/EditEntryForm";
import useEntryFilters from "../../hooks/useEntryFilters";
import EntryFilters from "../../components/diaryentries/EntryFilters";
import useDiaryEntries from "../../hooks/UseDiaryEntries";
import { moodOptions, productivityOptions } from '../../utils/constants';
import { tagOptions } from "../../utils/Tags"; 
import "./TimelinePage.css"

const TimelinePage = () => {
  const { entries: raw, loading, error } = useDiaryEntries(20);
  const {
    entries,
    loading: timelineLoading,
    error: timelineError,
    showNewForm,
    editingEntry,
    handleAddEntry,
    handleEditClick,
    handleUpdateEntry,
    handleDeleteEntry,
    toggleNewForm,
    cancelEditing
  } = useTimelineLogic();

  const { filters, handleChange, clearFilters, filtered } = useEntryFilters(raw);

  return (
    <div className="timeline-page">
      <h1>Mi Línea de Tiempo</h1>

      <EntryFilters
        filters={filters}
        onChange={handleChange}
        onClear={clearFilters}
        options={{ moodOptions, productivityOptions, tagOptions }}
      />

      <button className="btn primary" onClick={toggleNewForm}>
        + Nueva Entrada
      </button>

      {showNewForm && (
        <NewEntryForm
          onSubmit={handleAddEntry}
          onCancel={toggleNewForm}
        />
      )}

      {editingEntry && (
        <EditEntryForm
          initialData={editingEntry}
          onSubmit={handleUpdateEntry}
          onCancel={cancelEditing}
        />
      )}

      {(loading || timelineLoading) && <p>Cargando...</p>}
      {(error || timelineError) && (
        <p className="error-message">{error || timelineError}</p>
      )}

      <div className="diary-entries-list">
        {filtered.map((e) => (
          <DiaryEntryCard
            key={e.id}
            entry={e}
            onEdit={handleEditClick}
            onDelete={handleDeleteEntry}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
