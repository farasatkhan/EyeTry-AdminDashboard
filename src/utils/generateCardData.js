const generateCardData = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      name: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
      value: Math.floor(Math.random() * 250),
    }));
};

const generateDashboardData = () => {
  return {
    revenue: Math.floor(Math.random() * 250),
    transactions: Math.floor(Math.random() * 250),
    customers: Math.floor(Math.random() * 250),
    orders: Math.floor(Math.random() * 250),
  }
}

const generateUsersDashboardData = () => {
  return {
    total_users: Math.floor(Math.random() * 100),
    active_users: Math.floor(Math.random() * 100),
    banned_users: Math.floor(Math.random() * 100),
    new_users: Math.floor(Math.random() * 100),
  }
}

const generateAgentsDashboardData = () => {
  return {
    total_agents: Math.floor(Math.random() * 100),
    active_agents: Math.floor(Math.random() * 100),
    total_active_tickets: Math.floor(Math.random() * 100),
    resolved_tickets: Math.floor(Math.random() * 100),
  }
}

const generateOrdersDashboardData = () => {
  return {
    total_orders: Math.floor(Math.random() * 40),
    delivered_orders: Math.floor(Math.random() * 40),
    pending_orders: Math.floor(Math.random() * 40),
    ready_orders: Math.floor(Math.random() * 40),
  }
}



export { generateCardData, generateDashboardData, generateUsersDashboardData, generateAgentsDashboardData, generateOrdersDashboardData }
  