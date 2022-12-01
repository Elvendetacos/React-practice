import Layout from "../Layout/Layout";
import "../assets/Style/login.css";
import img from "../assets/Img/DEADLINE.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function login() {
  const formData = useRef(null)
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
  }

  const mover = () =>{
    navigate('/register')
  }

  return (
    <Layout>
      <form className="form-login" onSubmit={handleSubmit} ref={formData}>
      <div className="login-date">
        <div className="logo-login">
          <img src={img} alt="" />
        </div>
        <div className="register-login">
          <input type="text" name="" id="" placeholder="Nombre de usuario" />
          <input type="password" name="" id="" placeholder="Contraseña" />
          <button>Login</button>
        </div>
      </div>
      <div className="login-info">
        <p className="duda">¿Aún no tienes cuenta?</p>
        <p className="links-log" onClick={mover}>Haz click aqui</p>
      </div>
      </form>
    </Layout>
  );
}

export default login;
