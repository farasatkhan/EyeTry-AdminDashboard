import axios from '../../api/config';

export const newProduct = async (data) => {
    try {

        const response = await axios.post('/products/v1/glasses', data);
        return response;
    } catch (error) {
        throw error;
    }
}