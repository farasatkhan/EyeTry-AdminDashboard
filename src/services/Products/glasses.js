import axios from '../../api/config';

export const newProduct = async (data) => {
    try {
        const response = await axios.post('/products/v1/glasses', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const addProductImages = async (glassesId, formData) => {
    try {
        const response = await axios.put(`/products/v1/glasses/${glassesId}/images`, formData, { headers: {'Content-Type': 'multipart/form-data'}});
        return response;
    } catch (error) {
        throw error;
    }
}




