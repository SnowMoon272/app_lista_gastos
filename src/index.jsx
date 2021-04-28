/* Librarys & Frameworks */
import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
/* Componets */
import EditarGasto from "./Components/EditarGasto";
import GastosPorCategoria from "./Components/GastosPorCategoria";
import InicioSesion from "./Components/InicioSesion";
import ListaDeGastos from "./Components/ListaDeGastos";
import RegistroUsuarios from "./Components/RegistroUsuarios";
import RutaPrivada from "./Components/RutaPrivada";
import Fondo from "./Tools/Fondo";
import App from "./App";
import Contenedor from "./Tools/Contenedor";
import { AuthProvider } from "./contextos/AuthContext";
/* Assets & CSS */
import "./index.css";
import favicon from "./Images/logo.png";

WebFont.load({
  google: {
    // Raleway:wght@200;300;400;500;600;700;800
    families: ["Raleway:200,400,600,800", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path="/iniciar-sesion" component={InicioSesion} />
              <Route path="/crear-cuenta" component={RegistroUsuarios} />
              <RutaPrivada path="/categorias">
                <GastosPorCategoria />
              </RutaPrivada>
              <RutaPrivada path="/lista">
                <ListaDeGastos />
              </RutaPrivada>
              <RutaPrivada path="/editar/id:">
                <EditarGasto />
              </RutaPrivada>
              <RutaPrivada path="/">
                <App />
              </RutaPrivada>
            </Switch>
          </Contenedor>
          <Fondo />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
