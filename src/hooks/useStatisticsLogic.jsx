import { useMemo } from 'react';
import { tagMapper } from '../utils/Tags'; 

const useStatisticsLogic = (entries) => {
  const moodCounts = useMemo(() => {
    return entries.reduce((acc, { mood }) => {
      acc[mood] = (acc[mood] || 0) + 1;
      return acc;
    }, {});
  }, [entries]);

  const productivityCounts = useMemo(() => {
    return entries.reduce((acc, { productivity }) => {
      acc[productivity] = (acc[productivity] || 0) + 1;
      return acc;
    }, {});
  }, [entries]);

  const tagCounts = useMemo(() => {
    return entries.reduce((acc, { tagIds }) => {
      tagIds.forEach(id => {
        const label = tagMapper[id] || `Etiqueta ${id}`;
        acc[label] = (acc[label] || 0) + 1;
      });
      return acc;
    }, {});
  }, [entries]);

  const seriesData = useMemo(() => {
    const map = {};
    entries.forEach(({ date }) => {
      const day = new Date(date).toISOString().split('T')[0];
      map[day] = (map[day] || 0) + 1;
    });
    return Object.entries(map)
      .sort(([a], [b]) => new Date(a) - new Date(b))
      .map(([day, count]) => ({ date: day, count }));
  }, [entries]);

  return { moodCounts, productivityCounts, tagCounts, seriesData };
};

export default useStatisticsLogic;