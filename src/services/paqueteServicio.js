import axios from "axios"

export const obtenerPaquetesServicio = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/paquete`);
        console.log(response);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const registrarPaqueteServicio = async (paquete) => {
    console.log(paquete);
    const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/paquete`, paquete)
    return response.data;
}

export const obtenerPaquetePorIdServicio = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/paquete/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const comprarPaqueteCliente = async (paquete) => {
    try {
        console.log(paquete);
        const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/usuarios/paquete`, paquete);
        return response.data;
    } catch (error) {
        return error;
    }
}