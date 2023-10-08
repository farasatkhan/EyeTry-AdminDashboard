import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const newCategory = async (data) => {
    try {
        const response = await authenticatedAxiosInstance.post('/products/v1/category', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewCategories = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/products/v1/category');
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}