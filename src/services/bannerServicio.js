import axios from "axios";

export const registrarBannerServicio = async (banner) => {
    try {
        console.log(banner);
        const response = await axios.post(`${import.meta.env.VITE_API_REST_URL}/banner`, banner,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // Authorization: token,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const listarBannerServicio = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_REST_URL}/banner/infobBanners`, []
        );
        return response;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const actualizarPosicioneServicio = async (banners) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_API_REST_URL}/banner/actualizarPosiciones`, {
            bannersOrdenados:banners
        }
        );
        return response;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}