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
  const timeline = useTimelineLogic();
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

      <button className="btn primary" onClick={timeline.toggleNew}>+ Nueva Entrada</button>
      {timeline.showNewForm && <NewEntryForm onSubmit={timeline.handleAdd} onCancel={timeline.toggleNew} />}
      {timeline.editingEntry && <EditEntryForm initialData={timeline.editingEntry} onSubmit={timeline.handleUpdate} onCancel={timeline.cancelEdit} />}

      {loading && <p>Cargando...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="diary-entries-list">
        {filtered.map(e => (
          <DiaryEntryCard
            key={e.id}
            entry={e}
            onEdit={timeline.handleEditClick}
            onDelete={timeline.handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TimelinePage;
