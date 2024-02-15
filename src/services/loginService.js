import axios from "axios";

const API_URL = "http://localhost:3300";

export const auth = async (credentials) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/login`, credentials, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userInfo = async (token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_REST_URL}/userInfoToken`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(token);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
