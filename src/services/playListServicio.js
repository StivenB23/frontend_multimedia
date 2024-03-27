import axios from "axios";

export const crearPlayListServicio = async (listaReproduccion) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_REST_URL}/listas-reproduccion`,
      listaReproduccion
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const añadirCanciónPlayListServicio = async (contenidoMultPlay) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_REST_URL}/listas-reproduccion/addContenido`,
      contenidoMultPlay
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export const listarPlayListServicio = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_REST_URL}/listas-reproduccion`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
