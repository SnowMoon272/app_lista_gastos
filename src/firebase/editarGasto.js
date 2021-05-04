import { db } from "./firebaseConfig";

const editarGasto = ({ id, descripcion, cantidad, categoriar, fecha }) => {
  return db
    .collection("gastos")
    .doc(id)
    .update({
      Descripcion: descripcion,
      Cantidad: Number(cantidad),
      Categoria: categoriar,
      Fecha: fecha,
    });
};

export default editarGasto;
