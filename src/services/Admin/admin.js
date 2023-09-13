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

export const getAllUsers = async () => {
    try {
        const response = await axios.get('/admin/users');
        return response.data;
    } catch (error) {
        console.error('Error while fetching users', error);
        throw error;
    }
}

export const getAllOrders = async () => {
    try {
        const response = await axios.get('/admin/orders');
        return response.data;
    } catch (error) {
        console.error('Error while fetching orders', error);
        throw error;
    }
}