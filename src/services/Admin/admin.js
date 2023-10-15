import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const loginAdmin = async (data) => {
    try {
        const response = await unauthenticatedAxiosInstance.post('/admin/auth/login', data, {validateStatus: false});
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAdminProfile = async (adminId) => {
    try {
        const response = await authenticatedAxiosInstance.get(`/admin/${adminId}/profile`);
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

export const updateAdminProfilePhoto = async (formData) => {
    try {
        const response = await authenticatedAxiosInstance.post(`/admin/upload_image_server/`, formData, { headers: {'Content-Type': 'multipart/form-data'}});
        return response;
    } catch (error) {
        throw error;
    }
}

export const viewAdminProfilePhoto = async () => {
    try {
        const response = await authenticatedAxiosInstance.get(`/admin/view_image_server/`);
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

export const getAllSupportAgents = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/admin/agents');
        return response.data;
    } catch (error) {
        console.error('Error while fetching agents', error);
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

export const banUser = async (customerId, data) => {
    try {
        const response = await authenticatedAxiosInstance.put(`/admin/user/ban/${customerId}`, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const unbanUser = async (customerId) => {
    try {
        const response = await authenticatedAxiosInstance.post(`/admin/user/unban/${customerId}`);
        return response;
    } catch (error) {
        throw error;
    }
}

export const banAgent = async (agentId, data) => {
    try {
        const response = await authenticatedAxiosInstance.put(`/admin/agent/ban/${agentId}`, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const unbanAgent = async (agentId) => {
    try {
        const response = await authenticatedAxiosInstance.post(`/admin/agent/unban/${agentId}`);
        return response;
    } catch (error) {
        throw error;
    }
}

// export const banUser = async (userId, banned_until, banned_reason) => {
//     try {
//         const response = await authenticatedAxiosInstance.put('/admin/user/ban', {userId, banned_until, banned_reason});
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }

// export const unbanUser = async (userId) => {
//     try {
//         const response = await authenticatedAxiosInstance.put('/admin/user/unban', {userId});
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }