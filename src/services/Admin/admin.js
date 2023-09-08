import axios from '../../api/config';

export const getAdminProfile = async () => {
    try {
        const response = await axios.get('/admin/profile');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateAdminBasicInformation = async (adminId, data) => {
    try {
        const response = await axios.put(`/admin/profile/${adminId}`, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const updateAdminPassword = async (adminId, data) => {
    try {
        const response = await axios.put(`/admin/profile/${adminId}/password/`, data);
        return response;
    } catch (error) {
        throw error;
    }
}