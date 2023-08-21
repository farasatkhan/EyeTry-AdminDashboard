import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    date: "2023-07-01",
    sales_amount: 500,
    revenue_amount: 800,
  },
  {
    date: "2023-07-08",
    sales_amount: 8246,
    revenue_amount: 9765,
  },
  {
    date: "2023-07-15",
    sales_amount: 11000,
    revenue_amount: 4891,
  },
  {
    date: "2023-07-22",
    sales_amount: 6925,
    revenue_amount: 4444,
  },
  {
    date: "2023-07-29",
    sales_amount: 5555,
    revenue_amount: 4444,
  },
];

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex justify-end gap-5 mt-2">
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          className="flex justify-center items-center gap-2"
        >
          <div
            className="w-2.5 h-2.5"
            style={{ backgroundColor: entry.color }}
          />
          <p className="text-sm">
            {entry.value === "sales_amount" ? "Sales" : "Revenue"}
          </p>
        </div>
      ))}
    </div>
  );
};

const formatYAxisTick = (value) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(0) + "k";
  }
  return value;
};

const SalesOverview = () => {
  return (
    <ResponsiveContainer width="99%" height="100%">
      <LineChart data={data} margin={{ left: -20, right: 10 }}>
        <XAxis
          opacity={0.8}
          dataKey="date"
          className="text-xs"
          axisLine={false}
          tick={{ dy: 10 }}
          tickLine={false}
          tickFormatter={(date) => {
            const formattedDate = new Date(date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
            });
            return formattedDate;
          }}
        />
        <YAxis
          opacity={0.8}
          className="text-xs"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatYAxisTick}
          tick={{ dx: -5 }}
        />
        <CartesianGrid vertical={false} opacity={0.8} strokeDasharray="3 3" />
        {/* <Tooltip /> */}
        <Legend content={CustomLegend} />
        <Line
          type="monotone"
          dataKey="sales_amount"
          stroke="#8884d8"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="revenue_amount"
          stroke="#82ca9d"
          strokeDasharray="5 5"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesOverview;
