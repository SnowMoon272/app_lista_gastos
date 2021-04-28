import React, { useState } from "react";
import Boton from "../Tools/Boton";
import SelectCategorias from "./SelectCategorias";
import { ReactComponent as IconoPlus } from "../Images/plus.svg";
import {
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "../Tools/ElementosDeFormularios";

function FormularioGasto() {
  const [inputDescripcion, cambiarInputDescripcion] = useState("");
  const [inputCantidad, cambiarInputCantidad] = useState("");
  const [categoria, cambiarCategoria] = useState("Hogar");

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      cambiarInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  return (
    <Formulario>
      <ContenedorFiltros>
        <SelectCategorias
          categoria={categoria}
          cambiarCategoria={cambiarCategoria}
        />
        <p>Filtros</p>
      </ContenedorFiltros>
      <div>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripción del Gasto"
          value={inputDescripcion}
          onChange={handleChange}
        />
        <InputGrande
          type="text"
          name="cantidad"
          id="cantidad"
          placeholder="$0.00"
          value={inputCantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <Boton type="submint" as="button" conIcono primario>
          Agregar Gasto <IconoPlus />
        </Boton>
      </ContenedorBoton>
    </Formulario>
  );
}

export default FormularioGasto;
