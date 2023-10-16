const generateSalesData = () => {
    return {
      total_sales: Math.floor(Math.random() * 25000),
      total_sales_pc: Math.floor(Math.random() * 100),
      total_revenue: Math.floor(Math.random() * 25000),
      total_revenue_pc: Math.floor(Math.random() * 100),
      total_ordervalue: Math.floor(Math.random() * 10000),
      total_ordervalue_pc: Math.floor(Math.random() * 100),
    }
}

const generateStoreVisitsData = () => {
    return {
      total_visits: Math.floor(Math.random() * 100000),
      total_visits_pc: Math.floor(Math.random() * 100),
      total_visitors: Math.floor(Math.random() * 25000),
      total_visitors_pc: Math.floor(Math.random() * 100),
    }
}

const generateAvgOrderData = () => {
    return {
      avg_order: Math.floor(Math.random() * 1000),
      avg_order_pc: Math.floor(Math.random() * 100),
    }
}

const generateConversionRateData = () => {
    return {
      total_conversion_value: Math.floor(Math.random() * 1000),
      total_conversion_value_pc: Math.floor(Math.random() * 100),
      added_to_cart_percentage: Math.floor(Math.random() * 100),
      added_to_cart_percentage_pc: Math.floor(Math.random() * 100),
      reached_checkout: Math.floor(Math.random() * 100),
      reached_checkout_pc: Math.floor(Math.random() * 100),
      reached_payment: Math.floor(Math.random() * 100),
      reached_payment_pc: Math.floor(Math.random() * 100),
    }
}

const generateOrdersRisputesData = () => {
    return {
      total_risputes: Math.floor(Math.random() * 1000),
      total_risputes_pc: Math.floor(Math.random() * 100),
    }
}

const generateOrdersSessionsData = () => {
    return {
      total_sessions: Math.floor(Math.random() * 15000),
      total_sessions_pc: Math.floor(Math.random() * 100),
      total_visitors: Math.floor(Math.random() * 100),
      total_visitors_pc: Math.floor(Math.random() * 100),
    }
}

export { generateSalesData, generateConversionRateData, generateStoreVisitsData, generateAvgOrderData, generateOrdersRisputesData, generateOrdersSessionsData }