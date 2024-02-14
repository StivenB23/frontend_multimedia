import axios from "axios";

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
