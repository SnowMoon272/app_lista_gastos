import React from "react";
import { ReactComponent as IconoComida } from "../Images/cat_comida.svg";
import { ReactComponent as IconoCompras } from "../Images/cat_compras.svg";
import { ReactComponent as IconoCuentasYPagos } from "../Images/cat_cuentas-y-pagos.svg";
import { ReactComponent as IconoDiversion } from "../Images/cat_diversion.svg";
import { ReactComponent as IconoHogar } from "../Images/cat_hogar.svg";
import { ReactComponent as IconoRopa } from "../Images/cat_ropa.svg";
import { ReactComponent as IconoSaludEHigiene } from "../Images/cat_salud-e-higiene.svg";
import { ReactComponent as IconoTrasporte } from "../Images/cat_transporte.svg";

const IconoCategoria = ({ id }) => {
  switch (id) {
    case "comida":
      return <IconoComida />;
    case "compras":
      return <IconoCompras />;
    case "cuentas y pagos":
      return <IconoCuentasYPagos />;
    case "diversion":
      return <IconoDiversion />;
    case "hogar":
      return <IconoHogar />;
    case "ropa":
      return <IconoRopa />;
    case "salud e higiene":
      return <IconoSaludEHigiene />;
    case "transporte":
      return <IconoTrasporte />;
    default:
      break;
  }
};

export default IconoCategoria;
