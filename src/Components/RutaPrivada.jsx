/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-else-return */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contextos/AuthContext";

function RutaProtegida({ children, ...restoDePropiedades }) {
  const { usuario } = useAuth();

  if (usuario) {
    return <Route {...restoDePropiedades}>{children}</Route>;
  } else {
    return <Redirect to="/iniciar-sesion" />;
  }
}

export default RutaProtegida;
