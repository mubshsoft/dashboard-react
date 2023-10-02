import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1-20 Aug', value:  20 },
  { name: '11-20 Aug', value: 40 },
  { name: '21-30 Aug', value: 45 },
  { name: '01-10 Nov', value: 45 },
  
];

const BarChartComponent = () => {
  return (
    <>
    
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={data} margin={{ top: 50, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#6e62e5" />
        <Bar dataKey="value" fill="#d4d2f0" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
};

export default BarChartComponent;
