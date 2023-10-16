const generateTrafficData = () => {
    return  [
        { name: 'Direct', value: Math.floor(Math.random() * 2000) },
        { name: 'Organic', value: Math.floor(Math.random() * 300) }
    ];
  };
  
  export { generateTrafficData }
  