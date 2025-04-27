import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const TagUsageChart = ({ data }) => {
  const chartData = Object.entries(data).map(([name, value]) => ({ name, value }));

  return (
    <div className="chart-card">
      <h3>Uso de Etiquetas</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={chartData} margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#50E3C2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TagUsageChart;
