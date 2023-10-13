import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const viewParticularCustomer = async (customerId) => {
    try {
        const response = await authenticatedAxiosInstance.get(`/admin/users/${customerId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

