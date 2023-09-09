import axios from '../../api/config';

export const newGiftcard = async (data) => {
    try {
        const response = await axios.post('/admin/giftcard', data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewGiftcard = async () => {
    try {
        const response = await axios.get('/admin/giftcard');
        return response.data;
    } catch (error) {
        console.error('Error while viewing giftcards', error);
        throw error;
    }
}

export const updateGiftcard = async (giftcardId, data) => {
    try {
        const response = await axios.put(`/admin/giftcard/${giftcardId}`, data);
        return response.data;
    } catch (error) {
        console.error('Error while updating giftcards', error);
        throw error;
    }
}

export const deleteGiftcard = async (giftcardId) => {
    try {
        const response = await axios.delete(`/admin/giftcard/${giftcardId}`);
        return response.data;
    } catch (error) {
        console.error('Error while deleting giftcards', error);
        throw error;
    }
}