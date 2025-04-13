import React from "react";
import "./DiaryEntryCard.css"

const DiaryEntryCard = ({ entry }) => {
  const { title, summary, date, tags } = entry;

  return (
    <div className="diary-entry-card">
      <h2>{title}</h2>
      <p>{summary}</p>
      <p className="entry-date">{new Date(date).toLocaleDateString()}</p>
      
      {tags && tags.length > 0 && (
        <div className="entry-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
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