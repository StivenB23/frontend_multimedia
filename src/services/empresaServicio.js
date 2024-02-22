import axios from "axios";

export const registrarEmpresaServicio = async (empresa) => {
    try {
        console.log(empresa);
        const response = await axios.post(
          `${import.meta.env.VITE_API_REST_URL}/empresa`,
          empresa
        );
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
}