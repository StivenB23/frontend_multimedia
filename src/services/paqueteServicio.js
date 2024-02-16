import axios from "axios"

export const registrarPaqueteServicio = async (paquete) => {
    console.log(paquete);
    const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/paquete`, paquete)
    return response.data;
}