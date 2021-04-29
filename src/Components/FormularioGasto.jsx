import React, { useState } from "react";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import DatePicker from "./DatePicker";
import SelectCategorias from "./SelectCategorias";
import Boton from "../Tools/Boton";
import { ReactComponent as IconoPlus } from "../Images/plus.svg";
import agregarGasto from "../firebase/agregarGasto";
import { useAuth } from "../contextos/AuthContext";
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
  const [fecha, cambiarFecha] = useState(new Date());
  const { usuario } = useAuth();

  const handleChange = (e) => {
    if (e.target.name === "descripcion") {
      cambiarInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ""));
    }
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    const Cantidad = parseFloat(inputCantidad).toFixed(2);

    agregarGasto({
      categoriar: categoria,
      descripcion: inputDescripcion,
      cantidad: Cantidad,
      fecha: getUnixTime(fecha),
      uidUsuario: usuario.uid,
    });
  };

  return (
    <Formulario onSubmit={handleSubmint}>
      <ContenedorFiltros>
        <SelectCategorias
          categoria={categoria}
          cambiarCategoria={cambiarCategoria}
        />
        <DatePicker fecha={fecha} cambiarFecha={cambiarFecha} />
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
