import axios from 'axios';

export const AxiosInstance = (accessToken: string = '') => {
    const axiosInstance = axios.create({
        baseURL: 'https://localhost:7082',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'true',
            'Authorization': `Bearer ${accessToken}`
        }
    });

    const axiosGet = async(url: string = '') => {
        const response = await axiosInstance.get(url);
        return response.data;
    }

    const axiosPost = async(url: string = '', data: object = {}) => {
        const response = await axiosInstance.post(url, data);
        return response.data;
    }

    const axiosPut = async(url: string = '', data: object = {}) => {
        const response = await axiosInstance.put(url, data);
        return response.data;
    }

    const axiosDelete = async(url: string = '') => {
        const response = await axiosInstance.delete(url);
        return response.data;
    }

    const axiosPatch = async(url: string = '', data: object = {}) => {
        const response = await axiosInstance.patch(url, data);
        return response.data;
    }

    return {
        axiosGet,
        axiosPost,
        axiosPut,
        axiosDelete,
        axiosPatch
    };
}
