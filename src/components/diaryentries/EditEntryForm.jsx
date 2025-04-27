import React, { useState } from 'react';
import './NewEntryForm.css'; 

const tagOptions = [
  { id: 1, label: 'Salud' },
  { id: 2, label: 'Trabajo' },
  { id: 3, label: 'Familia' },
  { id: 4, label: 'Deporte' },
  { id: 5, label: 'Entretenimiento' },
];
const moodOptions = ['Feliz', 'Triste', 'Neutral', 'Emocionado', 'Ansioso'];
const productivityOptions = ['Alta', 'Media', 'Baja'];

const EditEntryForm = ({ initialData, onSubmit, onCancel }) => {
  const [content, setContent] = useState(initialData.content);
  const [mood, setMood] = useState(initialData.mood);
  const [productivity, setProductivity] = useState(initialData.productivity);
  const [tagIds, setTagIds] = useState(initialData.tagIds || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content, mood, productivity, tagIds });
  };

  const toggleTag = (id) => {
    setTagIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <form className="new-entry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Contenido</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Estado de ánimo</label>
        <select value={mood} onChange={e => setMood(e.target.value)}>
          {moodOptions.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Productividad</label>
        <select value={productivity} onChange={e => setProductivity(e.target.value)}>
          {productivityOptions.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Etiquetas</label>
        <div className="tag-options">
          {tagOptions.map(({ id, label }) => (
            <label key={id} className={`tag-option ${tagIds.includes(id) ? 'selected' : ''}`}>
              <input
                type="checkbox"
                value={id}
                checked={tagIds.includes(id)}
                onChange={() => toggleTag(id)}
              />
              {label}
            </label>
          ))}
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn secondary" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn primary">
          Actualizar Entrada
        </button>
      </div>
    </form>
  );
};

export default EditEntryForm;