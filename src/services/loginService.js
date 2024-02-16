import axios from "axios";

const API_URL = "http://localhost:3300/api/v1/auth";

export const auth = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
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
      `${API_URL}/userInfoToken`,
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
