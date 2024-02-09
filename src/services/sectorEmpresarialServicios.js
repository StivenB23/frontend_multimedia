import axios from "axios"

export const obtenerSectorEmpresarial = async () => {
    try {
       const sectores = await axios.get("http://localhost:3300/sectoresEmpresariales");
       return sectores.data;
    } catch (error) {
        
    }
}
export const crearSectorEmpresarial = async (empresa) => {
    try {
       const sectores = await axios.post("http://localhost:3300/sectoresEmpresariales", empresa);
       return sectores.data;
    } catch (error) {
        
    }
}