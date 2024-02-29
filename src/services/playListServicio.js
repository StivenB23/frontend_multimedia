import axios from "axios";

export const crearPlayListServicio = async (listaReproduccion) => {
    try {
        console.log(listaReproduccion);
        const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/listas-reproduccion`, listaReproduccion)
        return response.data;   
    } catch (error) {
        
        return error;   
    }
}