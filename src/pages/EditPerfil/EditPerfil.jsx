import { useState, useEffect } from 'react';
import './EditPerfil.css';
import ImagePerfil from "../../assets/img/perfil.png";
import { cambiarClaveUsuario, updateAvatar } from '../../services/userService';
import { getAvatarImgId } from '../../services/userService';
const EditPerfil = () => {

    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [userPhotoUrl, setUserPhotoUrl] = useState(null);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setErrorMessage("La nueva contraseña no coincide");
            return;
        }

        // Validar la nueva contraseña
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&.*])[a-zA-Z0-9!@#$%^&*.]{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            setErrorMessage("La nueva contraseña debe tener al menos 8 caracteres, un número y un carácter especial.");
            return;
        }

        try {
            await cambiarClaveUsuario(userInfo.id, { claveActual: currentPassword, nuevaClave: newPassword });
            alert("Contraseña cambiada exitosamente");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
            setErrorMessage("");
        } catch (error) {
            console.log(error.response.data);
            if (error.response && error.response.data && error.response.data.mensaje) {
                setErrorMessage(error.response.data.mensaje);
            } else {
                setErrorMessage("Error al cambiar la contraseña. Por favor, inténtalo de nuevo.");
            }
        }
    };


    // imagen
    useEffect(() => {
        const fetchUserPhoto = async () => {
            try {
                const url = await getAvatarImgId(userInfo.id);
                if (url) {
                    setUserPhotoUrl(URL.createObjectURL(url));
                }
            } catch (err) {
                console.error(err);
                setUserPhotoUrl(null);
            }
        };

        fetchUserPhoto();
    }, [userInfo.id]);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        const previewURL = URL.createObjectURL(file);
        setPreviewImage(previewURL);
    };

    const handleUpload = async () => {
        try {
            if (!selectedFile) {
                console.error("Seleccione un archivo");
                return;
            }
            const formData = new FormData();
            formData.append("avatar", selectedFile);
            await updateAvatar(userInfo.id, formData);
            window.location.reload();
        } catch (error) {
            console.error("Error al actualizar el avatar:", error);
        }
    };

    return (
        <div className="EditPerfil">
            <div className="ChangeImage">
                <h3 className="">Cambia tu imagen</h3>
                <figure>
                    {previewImage ? (
                        <img src={previewImage} alt="Vista previa de la imagen" />
                    ) : userPhotoUrl ? (
                        <img src={userPhotoUrl} alt="Vista previa de la imagen" />
                    ) : (
                        <img src={ImagePerfil} alt="Vista previa de la imagen" />
                    )}
                </figure>
                <label>
                    <p>Seleccionar Archivo </p>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                    />
                </label>
                <button onClick={handleUpload}>Subir Imagen</button>
            </div>
            <div className='password'>
                <h3 className="">Cambio de Contraseña</h3>
                <form onSubmit={handleChangePassword} className="change-password-form" autoComplete="new-password" >
                    <label htmlFor="currentPassword" className="password-label">
                        <p>Contraseña Actual:</p>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                            className="password-input"
                        />
                    </label>
                    <label htmlFor="password" className="password-label">
                        <p>Nueva Contraseña:</p>
                        <input
                            type="password"
                            id="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="password-input"
                        />
                    </label>
                    <label htmlFor="confirmPassword" className="password-label">
                        <p>Confirmar Nueva Contraseña:</p>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            required
                            className="password-input"
                        />
                    </label>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="change-password-button">
                        Cambiar Contraseña
                    </button>
                </form>
            </div>
        </div>

    );
};

export default EditPerfil;
