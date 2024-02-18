import axios from "axios";

export const getUsersServicio = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/usuarios`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const createUser = async (usuario) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/usuarios`, usuario, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
