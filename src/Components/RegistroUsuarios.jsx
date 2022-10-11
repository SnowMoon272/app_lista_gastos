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
/* Assets & CSS */
import { ReactComponent as SvgLogin } from "../Images/registro.svg";
import { auth } from "../firebase/firebaseConfig";
import { Formulario, Input, ContenedorBoton } from "../Tools/ElementosDeFormularios";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

function RegistroUsuarios() {
  const history = useHistory();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        establecerCorreo(e.target.value);
        break;
      case "password":
        establecerPassword(e.target.value);
        break;
      case "password2":
        establecerPassword2(e.target.value);
        break;
      default:
        break;
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
        mensaje: "Ingresa un correo electrónico válido.",
      });
      return null;
    }

    if (correo === "" || password === "" || password2 === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Rellana todos los datos",
      });
      return null;
    }

    if (password !== password2) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Las contraseñas no coinciden",
      });
      return null;
    }

    try {
      await auth.createUserWithEmailAndPassword(correo, password);
      history.push("/");
    } catch (error) {
      cambiarEstadoAlerta(true);
      let Mensaje;
      switch (error.code) {
        case "auth/invalid-password":
          Mensaje = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          Mensaje = "Ya existe una cuenta con el correo electrónico proporcionado.";
          break;
        case "auth/invalid-email":
          Mensaje = "El correo electrónico no es válido.";
          break;
        default:
          Mensaje = "Hubo un error al intentar crear la cuenta.";
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
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Inciar Sesión</Boton>
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
        <Input
          type="password"
          name="password2"
          placeholder="Repetir Contraseña"
          value={password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as="button" type="submit" primario>
            Crear Cuenta
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

export default RegistroUsuarios;
