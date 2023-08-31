import axios from '../../api/config';

export const newFAQ = async (data) => {
    try {
        const response = await axios.post('/v1/faq', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewFAQs = async () => {
    try {
        const response = await axios.get('/v1/faq');
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}

export const updateFAQ = async (faqID, data) => {
    try {
        const response = await axios.put(`/v1/faq/${faqID}`, data);
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}

export const deleteFAQ = async (faqID) => {
    try {
        const response = await axios.delete(`/v1/faq/${faqID}`);
        return response.data;
    } catch (error) {
        console.error('Error while fetching categories', error);
        throw error;
    }
}