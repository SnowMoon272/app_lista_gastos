import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Boton from "../Tools/Boton";
import { ReactComponent as SvgLogin } from "../Images/registro.svg";
import { Header, Titulo, ContenedorHeader } from "../Tools/Header";
import {
  Formulario,
  Input,
  ContenedorBoton,
} from "../Tools/ElementosDeFormularios";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

function RegistroUsuarios() {
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Comprobamos del lado del cleinte que el correo sea valido. */
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      console.log("Ingresa un correo electronico valido.");
      return null;
    }

    if (correo === "" || password === "" || password2 === "") {
      console.log("Porfabor rellana todos los diatos");
      return null;
    }

    if (password !== password2) {
      console.log("Las contraseñas no coinciden");
      return null;
    }

    console.log("Usuario registrado");
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
            <Boton to="/iniciar-sesion">Inciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
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
    </>
  );
}

export default RegistroUsuarios;
