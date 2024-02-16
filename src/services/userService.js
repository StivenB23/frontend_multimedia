import axios from "axios";

const API_URL = "http://localhost:3300";

export const createUser = async (usuario) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, usuario, {
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
