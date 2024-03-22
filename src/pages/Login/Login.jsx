import "./Login.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../services/loginService";
import { userInfo } from "../../services/loginService";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imgUpload } from "../../services/loginService";

const Login = () => {
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegate = useNavigate();
  const [errorService, setErrorService] = useState(null);

  const loginData = async (data) => {
    try {
      let { correo, clave } = data;
      const credentials = { correo, clave };
      const response = await auth(credentials);

      console.log("Esta es la respuesta: " + response);

      const join = response.token_type + " " + response.token;
      sessionStorage.setItem("token", join);
      const infoUser = await userInfo(join);

      const infoUserToString = JSON.stringify(infoUser);

      sessionStorage.setItem("userInfo", infoUserToString);
      navegate("/Dashboard");
    } catch (error) {
      setErrorService(error);
    }
  };

  useEffect(() => {
    // if (sessionStorage.getItem("userInfo") != null) {
    //   navegate("/Dashboard");
    // }
  }, [navegate]);

  useEffect(() => {
    const imagenes = async () => {
      try {
        const response = await imgUpload();
        setImages(response);
      } catch (error) {
        console.log(error);
      }
    };

    imagenes();
  }, []);

  return (
    <div className="loginContainer">
      <div className="containerOne">
        <div className="login">

          <div className="logoLogin"></div>

          {errorService != null && (
            <>
              <p className="errorMessage">
                EL usuario o la contraseña no son correctos
              </p>
            </>
          )}

          <label htmlFor="">Correo</label>
          <input
            type="text"
            placeholder="example@dominio.com"
            {...register("correo", { required: "El correo es obligatorio" })}
          />
          {errors.correo && (
            <p className="errorMessage">{errors.correo.message}</p>
          )}

          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            placeholder="**********"
            {...register("clave", { required: "El correo es obligatorio" })}
          />
          {errors.clave && (
            <p className="errorMessage">Este campo es requerido</p>
          )}

          <div className="options">
            <div className="remember">
              <input type="checkbox" />
              <h5>Recuerdame</h5>
            </div>

            <div className="forgerPassword">
              <a href="">Olvide mi contraseña</a>
            </div>
          </div>

          {/* <div className="icons">
            <a
              href="https://www.google.com"
              target="_blank"
              className="cardIconG">
              <div></div>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="cardIconF">
              <div></div>
            </a>
            <a
              href="https://www.microsoft.com"
              target="_blank"
              className="cardIconM">
              <div></div>
            </a>
          </div> */}

          <div className="loginButton">
            <button type="submit" onClick={handleSubmit(loginData)}>
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="containerTwo">
        <div className="imgSlider">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            style={{ width: "100%", height: "100%" }}>
            {/* RENDERIZADO DEL VIDEO QUEMADO YOUTUBE */}

            <div style={{ width: "100%", height: "100%" }}>
              <ReactPlayer
                url="https://youtu.be/Vs-yM_-qb5M"
                volume={10}
                muted
                width="100%"
                height="100%"
                playing={true}
              />
            </div>

            {/* IMAGENES DEL BACK */}

            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Banner ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Login;
