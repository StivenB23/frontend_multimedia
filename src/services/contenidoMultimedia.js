import axios from "axios";

export const obtenerContenidoMultimedia = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_REST_URL}/contenido`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
