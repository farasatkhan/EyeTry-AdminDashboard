import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const viewParticularCustomer = async (customerId) => {
    try {
        const response = await authenticatedAxiosInstance.get(`/admin/users/${customerId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const viewCustomerImage = async (customerId) => {
    try {
        const response = await unauthenticatedAxiosInstance.get(`/users/view_image_server/${customerId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}