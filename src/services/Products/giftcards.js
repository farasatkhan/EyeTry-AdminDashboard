import axios from '../../api/config';

export const newGiftcard = async (data) => {
    try {
        const response = await axios.post('/products/v1/giftcards', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewGiftcards = async () => {
    try {
        const response = await axios.get('/products/v1/giftcards');
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}