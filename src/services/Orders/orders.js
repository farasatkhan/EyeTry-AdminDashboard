import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const viewAllOrders = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/admin/orders');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const viewParticularCustomersOrders = async (CustomerID) => {
    try {
        const response = await authenticatedAxiosInstance.get(`/admin/orders/customer/${CustomerID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const viewParticularCustomerSingleOrder = async (CustomerID, OrderID) => {
    try {
        const response = await authenticatedAxiosInstance.get(`/admin/orders/${OrderID}/customer/${CustomerID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateOrderDeliveryStatus = async (orderId, data) => {
    try {
        const response = await authenticatedAxiosInstance.put(`/products/v1/order/${orderId}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}