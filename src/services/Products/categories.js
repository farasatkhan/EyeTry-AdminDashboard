import axios from '../../api/config';

export const newCategory = async (data) => {
    try {
        const response = await axios.post('/products/v1/category', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewCategories = async () => {
    try {
        const response = await axios.get('/products/v1/category');
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}