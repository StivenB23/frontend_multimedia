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

export const saveContentMultimediaServicio = async (contenido) => {
  try {
      const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/contenido`, contenido, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
      );
      return response.data;
  } catch (error) {
      console.log(error);
      return error.message;
  }
}