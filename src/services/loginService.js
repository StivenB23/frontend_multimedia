import axios from "axios";

export const auth = async (credentials) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/auth/login`, credentials, {
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
      `${import.meta.env.VITE_API_REST_URL}/auth/userInfoToken`,
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
