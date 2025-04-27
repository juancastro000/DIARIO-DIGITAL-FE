import React from 'react';
import './EntryFilters.css';

const EntryFilters = ({ filters, onChange, onClear, options }) => (
  <div className="entry-filters">
    <select value={filters.mood} onChange={e => onChange({ field: 'mood', value: e.target.value })}>
      <option value="">Todos los estados</option>
      {options.moodOptions.map(m => <option key={m} value={m}>{m}</option>)}
    </select>
    <select value={filters.productivity} onChange={e => onChange({ field: 'productivity', value: e.target.value })}>
      <option value="">Todas las productividades</option>
      {options.productivityOptions.map(p => <option key={p} value={p}>{p}</option>)}
    </select>
    <input
      type="date"
      value={filters.dateFrom}
      onChange={e => onChange({ field: 'dateFrom', value: e.target.value })}
      placeholder="Desde"
    />
    <input
      type="date"
      value={filters.dateTo}
      onChange={e => onChange({ field: 'dateTo', value: e.target.value })}
      placeholder="Hasta"
    />
    <div className="tags-select">
      {options.tagOptions.map(({ id, label }) => (
        <label key={id} className={filters.tags.includes(id) ? 'selected' : ''}>
          <input
            type="checkbox"
            checked={filters.tags.includes(id)}
            onChange={() => {
              const newTags = filters.tags.includes(id)
                ? filters.tags.filter(t => t !== id)
                : [...filters.tags, id];
              onChange({ field: 'tags', value: newTags });
            }}
          />
          {label}
        </label>
      ))}
    </div>
    <button onClick={onClear} className="btn secondary">Limpiar</button>
  </div>
);

export default EntryFilters;