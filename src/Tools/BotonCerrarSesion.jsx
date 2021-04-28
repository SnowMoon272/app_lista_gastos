import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as IconoCerrarSesion } from "../Images/log-out.svg";
import Boton from "./Boton";
import { auth } from "../firebase/firebaseConfig";

function BotonCerrarSesion() {
  const history = useHistory();

  const cerrarSesion = async () => {
    await auth.signOut();
    history.push("./iniciar-sesion");
  };

  return (
    <div>
      <Boton iconoGrande as="button" onClick={cerrarSesion}>
        <IconoCerrarSesion />
      </Boton>
    </div>
  );
}

export default BotonCerrarSesion;
