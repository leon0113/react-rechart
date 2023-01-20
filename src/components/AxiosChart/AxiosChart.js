import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const AxiosChart = () => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const [phones,setPhones] = useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
               const phoneData = loadedData.map(phone => {      
             const parts =   phone.slug.split('-');
             const ph = {
                name : parts[0],
                value : parseInt(parts[1])
             };
             return ph;
            });
            setPhones(phoneData);
               console.log(phoneData)
        })
    },[])
    return (
        // <div>
        //     <BarChart width={800} height={300} data={phones}>
        //   <Bar dataKey="value" fill="#8884d8" />
        //   {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
        //     <XAxis dataKey="name"></XAxis>
        //     <YAxis></YAxis>
        //     <Tooltip></Tooltip>
        // </BarChart>
        //  <br />
         <PieChart width={400} height={400}>
          <Pie
            data={phones}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {phones.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
           
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
        // </div>
        
    );
};
o
export default AxiosChart;