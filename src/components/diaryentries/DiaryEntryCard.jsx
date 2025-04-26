import React from "react";
import "./DiaryEntryCard.css"

const tagMapper = {
  1: "Salud",
  2: "Trabajo",
  3: "Familia",
  4: "Deporte",
  5: "Entretenimiento"
};

const DiaryEntryCard = ({ entry }) => {
  const { content, date, mood, tagIds } = entry;

  return (
    <div className="diary-entry-card">
      <p className="entry-content">{content}</p>
      <p className="entry-date">{new Date(date).toLocaleDateString()}</p>
      <p className="entry-mood">Estado de ánimo: {mood}</p>
      
      {tagIds && tagIds.length > 0 && (
        <div className="entry-tags">
          {tagIds.map((tagId) => (
            <span key={tagId} className="tag">
              {tagMapper[tagId] || `Etiqueta ${tagId}`}
            </span>
          ))}
        </div>
      )}
      
      <div className="card-actions">
        <button className="btn edit-btn">Editar</button>
        <button className="btn delete-btn">Eliminar</button>
      </div>
    </div>
  );
};

export default DiaryEntryCard;