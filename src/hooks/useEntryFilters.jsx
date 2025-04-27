import { useState, useMemo } from 'react';
import { moodOptions, productivityOptions } from '../utils/constants.js';
import { tagOptions } from '../utils/Tags'; 

const initialFilter = {
  mood: '',
  productivity: '',
  tags: [],
  dateFrom: '',
  dateTo: ''
};

const useEntryFilters = entries => {
  const [filters, setFilters] = useState(initialFilter);

  const handleChange = ({ field, value }) => {
    setFilters(f => ({ ...f, [field]: value }));
  };

  const clearFilters = () => setFilters(initialFilter);

  const filtered = useMemo(() => {
    return entries.filter(entry => {
      const { mood, productivity, tagIds, date } = entry;
      if (filters.mood && entry.mood !== filters.mood) return false;
      if (filters.productivity && entry.productivity !== filters.productivity) return false;
      if (filters.tags.length && !filters.tags.every(t => tagIds.includes(t))) return false;
      if (filters.dateFrom && new Date(date) < new Date(filters.dateFrom)) return false;
      if (filters.dateTo && new Date(date) > new Date(filters.dateTo)) return false;
      return true;
    });
  }, [entries, filters]);

  return { filters, handleChange, clearFilters, filtered, moodOptions, productivityOptions, tagOptions };
};

export default useEntryFilters;