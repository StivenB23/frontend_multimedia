import axios from "axios";

export const auth = async (credentials) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_REST_URL}/auth/login`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
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

export const imgUpload = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_REST_URL}/banner`,
      {}
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
