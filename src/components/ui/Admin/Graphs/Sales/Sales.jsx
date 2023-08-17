import React from "react";

import data from "../../../../../data/Admin/SalesData";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const Sales = () => {
  const customTickFormatter = (tick) => {
    const date = new Date(tick);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  return (
    <ResponsiveContainer width="99%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
        <XAxis
          dataKey="date"
          tickFormatter={customTickFormatter}
          interval={2}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tickFormatter={(number) => `$${number}`}
        />
        <Tooltip />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="2%" stopColor="#377DFA" stopOpacity={0.8} />
            <stop offset="98%" stopColor="#377DFA" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#377DFA"
          fill="url(#gradient)"
          dot={{ stroke: "#377DFA", strokeWidth: 2, r: 3 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Sales;
