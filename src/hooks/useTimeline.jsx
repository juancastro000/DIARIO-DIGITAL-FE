import { useState, useEffect } from 'react';
import {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry
} from '../services/EntryService.js';

const useTimelineLogic = (limit = 20) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getEntries(limit)
      .then(data => isMounted && setEntries(data))
      .catch(err => isMounted && setError(err.message))
      .finally(() => isMounted && setLoading(false));
    return () => { isMounted = false; };
  }, [limit]);

  // Handlers
  const handleAddEntry = async (entryData) => {
    try {
      const newEntry = await createEntry(entryData);
      setEntries(prev => [newEntry, ...prev]);
      setShowNewForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditClick = (entry) => {
    setEditingEntry(entry);
    setShowNewForm(false);
  };

  const handleUpdateEntry = async (entryData) => {
    if (!editingEntry) return;
    try {
      const updated = await updateEntry(editingEntry.id, entryData);
      setEntries(prev => prev.map(e => e.id === updated.id ? updated : e));
      setEditingEntry(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      await deleteEntry(id);
      setEntries(prev => prev.filter(e => e.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleNewForm = () => {
    setShowNewForm(prev => !prev);
    setEditingEntry(null);
  };

  const cancelEditing = () => setEditingEntry(null);

  return {
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
  };
};

export default useTimelineLogic;