import React, { useEffect, useState } from "react";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell} from 'recharts';
import JSONData from '../data.json';
import '../App.css';

function BarData(props) {

  

  const [data, setData] = useState(JSONData)

  let today = new Date();

  const dayName = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

  useEffect(()=>{
    console.log(today.getDay())
  },[])
  
  return (
  
        <BarChart width={300} height={130} data={data}>
          <Tooltip />
          <XAxis dataKey="day" axisLine={false} tickLine={false}/>
          <Bar dataKey="amount" fill=	"#ec775f" >
          {data.map((entry, index) => (
                <Cell cursor="pointer" fill={entry.day === dayName[today.getDay()] ? '#82ca9d' : '#ec775f'} key={`cell-${index}`} />
              ))}
          </Bar>
        </BarChart>
  );
}

export default BarData;
