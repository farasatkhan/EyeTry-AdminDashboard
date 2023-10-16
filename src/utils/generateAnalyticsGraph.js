const generateAnalyticsGraphData = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
      sales_amount: Math.floor(Math.random() * 15000),
      revenue_amount: Math.floor(Math.random() * 10000),
    }));
};

export { generateAnalyticsGraphData }