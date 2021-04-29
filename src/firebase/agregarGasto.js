import { db } from "./firebaseConfig";

const agregarGasto = ({
  descripcion,
  cantidad,
  categoriar,
  fecha,
  uidUsuario,
}) => {
  db.collection("gastos").add({
    Descripcion: descripcion,
    Cantidad: cantidad,
    Categoria: categoriar,
    Fecha: fecha,
    Id_User: uidUsuario,
  });
};

export default agregarGasto;
