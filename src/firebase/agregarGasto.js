import { db } from "./firebaseConfig";

const agregarGasto = ({
  descripcion,
  cantidad,
  categoriar,
  fecha,
  uidUsuario,
}) => {
  return db.collection("gastos").add({
    Descripcion: descripcion,
    Cantidad: Number(cantidad),
    Categoria: categoriar,
    Fecha: fecha,
    Id_User: uidUsuario,
  });
};

export default agregarGasto;
