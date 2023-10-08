import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';


export const newFAQ = async (data) => {
    try {
        const response = await authenticatedAxiosInstance.post('/v1/faq', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewFAQs = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/v1/faq');
        return response.data;
    } catch (error) {
        console.error('Error while viewing faqs', error);
        throw error;
    }
}

export const updateFAQ = async (faqID, data) => {
    try {
        const response = await authenticatedAxiosInstance.put(`/v1/faq/${faqID}`, data);
        return response.data;
    } catch (error) {
        console.error('Error while updating faqs', error);
        throw error;
    }
}

export const deleteFAQ = async (faqID) => {
    try {
        const response = await authenticatedAxiosInstance.delete(`/v1/faq/${faqID}`);
        return response.data;
    } catch (error) {
        console.error('Error while deleting faqs', error);
        throw error;
    }
}