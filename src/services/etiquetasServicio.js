import axios from "axios"

export const obtenerEtiquetasServicio = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/etiqueta`);
        return response.data;
    } catch (error) {
        return error;
    }
}