/* eslint-disable prettier/prettier */
/* Librarys & Frameworks */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
/* Componets */
import styled from "styled-components";
import { Header, Titulo, ContenedorHeader } from "../Tools/Header";
/* Elements */
import Boton from "../Tools/Boton";
import Alerta from "../Tools/Alerta";
import { Formulario, Input, ContenedorBoton } from "../Tools/ElementosDeFormularios";
/* Assets & CSS */
import { ReactComponent as SvgLogin } from "../Images/login.svg";
import { auth } from "../firebase/firebaseConfig";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

function InicioSesion() {
  const history = useHistory();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "email") {
      establecerCorreo(e.target.value);
    } else if (e.target.name === "password") {
      establecerPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    /* Comprobamos del lado del cleinte que el correo sea valido. */
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Ingresa un correo electronico valido.",
      });
      return null;
    }

    if (correo === "" || password === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Porfabor rellana todos los datos",
      });
      return null;
    }

    try {
      await auth.signInWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      cambiarEstadoAlerta(true);
      let Mensaje;
      switch (error.code) {
        case "auth/wrong-password":
          Mensaje = "La contraseña no es correcta";
          break;
        case "auth/user-not-found":
          Mensaje = "No encontro ninguna cuenta con ese correo electronico.";
          break;
        default:
          Mensaje = "Hubo un error al intentar iniciar sesion.";
          break;
      }
      cambiarAlerta({
        tipo: "error",
        mensaje: Mensaje,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesión</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Iniciar Sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </>
  );
}

export default InicioSesion;
