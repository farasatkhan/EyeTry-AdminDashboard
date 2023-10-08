import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const newGiftcard = async (data) => {
    try {
        const response = await authenticatedAxiosInstance.post('/products/v1/giftcards', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewGiftcards = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/products/v1/giftcards');
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}