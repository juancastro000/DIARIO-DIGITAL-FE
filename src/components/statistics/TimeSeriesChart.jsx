import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const TimeSeriesChart = ({ data }) => (
  <div className="chart-card">
    <h3>Entradas a lo Largo del Tiempo</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#F5A623" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default TimeSeriesChart;