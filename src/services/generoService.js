import axios from "axios";

export const getGenerosService = async () =>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/genero`);
        console.log(response);
        return response.data;
    } catch (error) {
        return error;
    }

}