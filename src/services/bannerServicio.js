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