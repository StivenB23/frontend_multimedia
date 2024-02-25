import axios from "axios";

export const obtenerSectorEmpresarial = async () => {
  try {
    const sectores = await axios.get(`${import.meta.env.VITE_API_REST_URL}/sector-empresarial`);
    return sectores.data;
  } catch (error) {
    return error;
  }
};
export const crearSectorEmpresarial = async (empresa) => {
  try {
    const sectores = await axios.post(
      `${import.meta.env.VITE_API_REST_URL}/empresa`,
      empresa
    );
    return sectores.data;
  } catch (error) {}
};
