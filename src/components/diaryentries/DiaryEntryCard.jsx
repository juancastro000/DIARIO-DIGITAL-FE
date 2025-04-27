import React from "react";
import "./DiaryEntryCard.css"
import { tagMapper } from "../../utils/Tags";

const DiaryEntryCard = ({ entry, onEdit, onDelete }) => {
  const { id, content, date, mood, productivity, tagIds } = entry;

  return (
    <div className="diary-entry-card">
      <p className="entry-content">{content}</p>
      <p className="entry-date">{new Date(date).toLocaleDateString()}</p>
      <p className="entry-mood">Estado de ánimo: {mood}</p>
      <p className="entry-productivity">Productividad: {productivity}</p>
      {tagIds && tagIds.length > 0 && (
        <div className="entry-tags">
          {tagIds.map(tagId => (
            <span key={tagId} className="tag">
              {tagMapper[tagId] || `Etiqueta ${tagId}`}
            </span>
          ))}
        </div>
      )}
      <div className="card-actions">
        <button className="btn edit-btn" onClick={() => onEdit(entry)}>
          Editar
        </button>
        <button className="btn delete-btn" onClick={() => onDelete(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default DiaryEntryCard;