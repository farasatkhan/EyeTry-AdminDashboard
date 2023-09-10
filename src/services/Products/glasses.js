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

export const viewProductsList = async () => {
    try {
        const response = await axios.get('/products/v1/glasses');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const viewParticularProduct = async (glassesId) => {
    try {
        const response = await axios.get(`/products/v1/glasses/${glassesId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateProduct = async (productId, data) => {
    try {
        const response = await axios.put(`/products/v1/glasses/${productId}`, data);
        return response.data;
    } catch (error) {
        console.error('Error while updating product', error);
        throw error;
    }
}

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`/products/v1/glasses/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error while deleting product', error);
        throw error;
    }
}




