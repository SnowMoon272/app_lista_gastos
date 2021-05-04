/* Librarys & Frameworks */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import DatePicker from "./DatePicker";
/* Componets */
import SelectCategorias from "./SelectCategorias";
import Alerta from "../Tools/Alerta";
import editarGasto from "../firebase/editarGasto";
import { useAuth } from "../contextos/AuthContext";
/* Elements */
import agregarGasto from "../firebase/agregarGasto";
import Boton from "../Tools/Boton";
import {
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
  ContenedorBoton,
} from "../Tools/ElementosDeFormularios";
/* Assets & CSS */
import { ReactComponent as IconoPlus } from "../Images/plus.svg";

function FormularioGasto({ gasto }) {
  const [inputDescripcion, cambiarInputDescripcion] = useState("");
  const [inputCantidad, cambiarInputCantidad] = useState("");
  const [categoria, cambiarCategoria] = useState("hogar");
  const [fecha, cambiarFecha] = useState(new Date());
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const { usuario } = useAuth();
  const history = useHistory();

  useEffect(() => {
    // Comprobamos si ya hay algun gasto.
    // De ser asi establesemos todo el state con los valores del gasto.
    if (gasto) {
      // Comprobamosque el gasto sea del usuario actual.
      // Para eso comprobamos el uid guardado en el gasto con el usi del usuario.
      if (gasto.data().Id_User === usuario.uid) {
        cambiarCategoria(gasto.data().Categoria);
        cambiarFecha(fromUnixTime(gasto.data().Fecha));
        cambiarInputDescripcion(gasto.data().Descripcion);
        cambiarInputCantidad(gasto.data().Cantidad);
      } else {
        history.push("/lista");
      }
    }
  }, [gasto, usuario, history]);

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
        if (gasto) {
          editarGasto({
            id: gasto.id,
            categoriar: categoria,
            descripcion: inputDescripcion,
            cantidad: Cantidad,
            fecha: getUnixTime(fecha),
          })
            .then(() => {
              history.push("/lista");
            })
            .catch((error) => {
              cambiarEstadoAlerta(true);
              cambiarAlerta({
                tipo: "error",
                mensaje: `No se pudo editar el mensaje. ${error}`,
              });
            });
        } else {
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
        }
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
          {gasto ? "Editar Gasto" : "Agregar Gasto"}
          <IconoPlus />
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
