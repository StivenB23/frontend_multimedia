import axios from "axios";

export const getUsuarioLista = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_REST_URL}/usuario-lista`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postUsuarioLista = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_REST_URL}/usuario-lista`,
      data
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
