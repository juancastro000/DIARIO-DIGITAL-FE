import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import './EntryFilters.css';

const EntryFilters = ({ filters, onChange, onClear, options }) => {
  const [tagsOpen, setTagsOpen] = useState(false);
  const tagsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tagsRef.current && !tagsRef.current.contains(e.target)) {
        setTagsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="entry-filters-modern">
      <div className="filter-group">
        <label>Estado</label>
        <select
          value={filters.mood}
          onChange={e => onChange({ field: 'mood', value: e.target.value })}
        >
          <option value="">Todos</option>
          {options.moodOptions.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Productividad</label>
        <select
          value={filters.productivity}
          onChange={e => onChange({ field: 'productivity', value: e.target.value })}
        >
          <option value="">Todas</option>
          {options.productivityOptions.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="filter-group date-group">
        <label>Fechas</label>
        <div className="date-range">
          <input
            type="date"
            value={filters.dateFrom}
            onChange={e => onChange({ field: 'dateFrom', value: e.target.value })}
          />
          <span>–</span>
          <input
            type="date"
            value={filters.dateTo}
            onChange={e => onChange({ field: 'dateTo', value: e.target.value })}
          />
        </div>
      </div>

      <div className="filter-group tags-group" ref={tagsRef}>
        <label>Etiquetas</label>
        <button
          type="button"
          className="dropdown-toggle"
          onClick={() => setTagsOpen(prev => !prev)}
        >
          {filters.tags.length > 0 ? `${filters.tags.length} seleccionadas` : 'Seleccionar'}
          <FaChevronDown className={`chevron ${tagsOpen ? 'open' : ''}`} />
        </button>
        {tagsOpen && (
          <div className="dropdown-menu">
            {options.tagOptions.map(({ id, label }) => (
              <label key={id} className="dropdown-item">
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
        )}
      </div>

      <div className="filter-actions">
        <button className="btn secondary" onClick={onClear}>
          <FaTimes /> Limpiar
        </button>
      </div>
    </div>
  );
};

export default EntryFilters;