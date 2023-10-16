import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import data from "../../../../../data/Admin/TrafficData";

const COLORS = ["#377DFA", "#0E9CFF"];

const CustomLegend = ({ payload }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-20">
        {payload.map((entry, index) => (
          <div key={index} className="flex">
            <div key={`legend-${index}`} className="flex">
              <div className="flex justify-center mt-1.5">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
              </div>
              <div>
                <p>{entry.value}</p>
                <p className="text-xl">{entry.payload.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Traffic = ({ trafficData }) => {
  const chartData = trafficData ? trafficData : data;

  return (
    <ResponsiveContainer width="99%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          label={false}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Traffic;
