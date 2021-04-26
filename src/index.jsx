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
import Fondo from "./Tools/Fondo";
import App from "./App";
import Contenedor from "./Tools/Contenedor";
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
      <BrowserRouter>
        <Contenedor>
          <Switch>
            <Route path="/iniciar-sesion" component={InicioSesion} />
            <Route path="/crear-cuenta" component={RegistroUsuarios} />
            <Route path="/categorias" component={GastosPorCategoria} />
            <Route path="/lista" component={ListaDeGastos} />
            <Route path="/editar/id:" component={EditarGasto} />
            <Route path="/" component={App} />
          </Switch>
        </Contenedor>
        <Fondo />
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
