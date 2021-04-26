import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Boton from "../Tools/Boton";
import { ReactComponent as SvgLogin } from "../Images/registro.svg";
import { Header, Titulo, ContenedorHeader } from "../Tools/Header";
import {
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "../Tools/ElementosDeFormularios";

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

function RegistroUsuarios() {
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

      <Formulario>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electronico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <Input
          type="password"
          name="password2"
          placeholder="Repetir Contraseña"
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
