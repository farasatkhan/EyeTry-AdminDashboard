import { unauthenticatedAxiosInstance, authenticatedAxiosInstance  } from '../../api/config';

export const viewAllReviews = async () => {
    try {
        const response = await authenticatedAxiosInstance.get('/products/v1/reviews');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteReview = async (reviewId) => {
    try {
        const response = await authenticatedAxiosInstance.delete(`/products/v1/reviews/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error('Error while deleting review', error);
        throw error;
    }
}