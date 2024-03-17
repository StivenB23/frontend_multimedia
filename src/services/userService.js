import axios from "axios";

export const getUsersServicio = async (filters = {}) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/usuarios`, { params: filters });
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

export const getPackageUser = async (idUsuario) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/usuarios/${idUsuario}/paquete`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export const cambiarClaveUsuario = async (idUsuario, datosCambioClave) => {
  try {
    const response = await axios.patch(`${import.meta.env.VITE_API_REST_URL}/usuarios/${idUsuario}/cambiar-clave`, datosCambioClave);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const updateAvatar = async (userId, avatar) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_REST_URL}/usuarios/${userId}/avatar`,
      avatar,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getAvatarImgId = async (userId) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/usuarios/${userId}/avatarUsuario`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const inactiveUser = async (idUser, estado) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_REST_URL}/usuarios/${idUser}/estado`, { estado });
    return response.data;
  } catch (error) {
    return null;
  }
}