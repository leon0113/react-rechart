import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyChart = () => {
    const data = [
        {
          name: 'product A',
          price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'product B',
          price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'product C',
          price: 1000,
          pv: 800,
          amt: 2290,
        },
        {
          name: 'product D',
          price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'product E',
          price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'product F',
          price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'product G',
          price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <LineChart width={800} height={500} data={data}>
            <Line type="monotone" dataKey="price" ></Line>
            <Line dataKey="pv" ></Line>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyChart;