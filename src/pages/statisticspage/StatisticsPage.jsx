import React, { useEffect, useState } from 'react';
import { getEntries } from '../../services/EntryService'; 
import useStatisticsLogic from '../../hooks/useStatisticsLogic';
import MoodChart from '../../components/statistics/MoodChart';
import ProductivityChart from '../../components/statistics/ProductivityChart';
import TagUsageChart from '../../components/statistics/TagUsageChart';
import TimeSeriesChart from '../../components/statistics/TimeSeriesChart';
import './StatisticsPage.css';

const StatisticsPage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEntries(1000)
      .then(data => setEntries(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const { moodCounts, productivityCounts, tagCounts, seriesData } = useStatisticsLogic(entries);

  if (loading) return <p>Cargando estadísticas...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="statistics-page">
      <h1 className="stats-title">Estadísticas de Entradas</h1>
      <div className="charts-grid">
        <MoodChart data={moodCounts} />
        <ProductivityChart data={productivityCounts} />
        <TagUsageChart data={tagCounts} />
        <TimeSeriesChart data={seriesData} />
      </div>
    </div>
  );
};

export default StatisticsPage;