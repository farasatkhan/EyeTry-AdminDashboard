const generateSalesData = () => {
  return Array.from({ length: 6 }, (_, index) => ({
    date: new Date().toDateString(),
    amount: Math.floor(Math.random() * 1000),
  }));
};

export { generateSalesData }
