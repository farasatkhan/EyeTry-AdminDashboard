import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 150 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 120 },
  { name: "May", value: 210 },
];

const CardGraph = () => {
  return (
    <ResponsiveContainer width="99%" height="100%">
      <LineChart data={data}>
        <Line
          dataKey="value"
          type="monotone"
          opacity={0.7}
          stroke="#00c9a7"
          strokeWidth={2}
        />
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CardGraph;
