import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const viewAllOrders = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/admin/orders');
        return response.data;
    } catch (error) {
        throw error;
    }
}