import axios from "axios"

export const obtenerCategoriasServicio = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/categoria`, []
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const saveCategoryServicio = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/categoria`, {}, []
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}