import "../assets/Style/register.css";
import Layout from "../Layout/Layout";
import img from '../assets/Img/DEADLINE.png'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function FromRegister() {

  const formData = useRef(null);

  const navigate = useNavigate()
  
  const handleSubmit = (event) =>{
    event.preventDefault();   
  }

  const mover =()=>{
    navigate('/')
  }

  return (
    <>
      <Layout>
        <form className="form-register" onSubmit={handleSubmit} ref={formData}>
        <div className="register-date">
            <div className="logo-register">
                <img src={img} alt="" />
            </div>
            <div className="register-register">
                <input type="text" name="" id="" placeholder="Nombre de usuario"/>
                <input type="password" name="" id="" placeholder="Contraseña"/>
                <input type="email" name="" id="" placeholder="Correo electronico"/>
                <button>Registro</button>
            </div>
        </div>
        <div className="register-info">
            <p className="duda">¿Ya tienes cuenta?</p>
            <p className="links-log" onClick={mover}>Haz click aqui</p>
        </div>
        </form>
      </Layout>
    </>
  );
}

export default FromRegister;
