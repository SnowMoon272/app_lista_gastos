import React, { useState } from "react";
import getUnixTime from "date-fns/getUnixTime";
// import fromUnixTime from "date-fns/fromUnixTime";
import DatePicker from "./DatePicker";
import SelectCategorias from "./SelectCategorias";
import Boton from "../Tools/Boton";
import { ReactComponent as IconoPlus } from "../Images/plus.svg";
import agregarGasto from "../firebase/agregarGasto";
import Alerta from "../Tools/Alerta";
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
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

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
    // Trasformar la cantidad en numero y le pasamos 2 decimales.
    const Cantidad = parseFloat(inputCantidad).toFixed(2);

    // Comprobamos que haya una descripcion y valor.
    if (inputDescripcion !== "" && inputCantidad !== "") {
      if (Cantidad) {
        agregarGasto({
          categoriar: categoria,
          descripcion: inputDescripcion,
          cantidad: Cantidad,
          fecha: getUnixTime(fecha),
          uidUsuario: usuario.uid,
        })
          .then(() => {
            cambiarCategoria("hogar");
            cambiarInputDescripcion("");
            cambiarInputCantidad("");
            cambiarFecha(new Date());

            cambiarEstadoAlerta(true);
            cambiarAlerta({
              tipo: "exito",
              mensaje: "El gasto fue agregado correctamente.",
            });
          })
          .catch((error) => {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
              tipo: "error",
              mensaje: `Hubo un problema al agregar un gasto. ${error}`,
            });
          });
      } else {
        cambiarEstadoAlerta(true);
        cambiarAlerta({
          tipo: "error",
          mensaje: "Ingresa una cantidad valida",
        });
      }
    } else {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Debes rellenar todos los campos.",
      });
    }
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
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </Formulario>
  );
}

export default FormularioGasto;
