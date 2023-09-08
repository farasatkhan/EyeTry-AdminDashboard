import axios from '../../api/config';

export const getAdminProfile = async () => {
    try {
        const response = await axios.get('/admin/profile');
        return response.data;
    } catch (error) {
        throw error;
    }
}