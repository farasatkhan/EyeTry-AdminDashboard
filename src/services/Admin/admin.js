import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const loginAdmin = async (data) => {
    try {
        const response = await unauthenticatedAxiosInstance.post('/admin/auth/login', data, {validateStatus: false});
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAdminProfile = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/admin/profile');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateAdminBasicInformation = async (adminId, data) => {
    try {
        const response = await authenticatedAxiosInstance.put(`/admin/profile/${adminId}`, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const updateAdminPassword = async (adminId, data) => {
    try {
        const response = await authenticatedAxiosInstance.put(`/admin/profile/${adminId}/password/`, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAllUsers = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/admin/users');
        return response.data;
    } catch (error) {
        console.error('Error while fetching users', error);
        throw error;
    }
}

export const getAllOrders = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/admin/orders');
        return response.data;
    } catch (error) {
        console.error('Error while fetching orders', error);
        throw error;
    }
}

export const banUser = async (userId, banned_until, banned_reason) => {
    try {
        const response = await authenticatedAxiosInstance.put('/admin/user/ban', {userId, banned_until, banned_reason});
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const unbanUser = async (userId) => {
    try {
        const response = await authenticatedAxiosInstance.put('/admin/user/unban', {userId});
        return response.data;
    } catch (error) {
        throw error;
    }
}