import { useState, useEffect } from "react";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/AuthContext";

function useObtenerGastosDelMes() {
  const [gastos, establecerGastos] = useState([]);
  const { usuario } = useAuth();

  useEffect(() => {
    const inicioDeMes = getUnixTime(startOfMonth(new Date()));
    const finDeMes = getUnixTime(endOfMonth(new Date()));

    if (usuario) {
      const unsuscribe = db
        .collection("gastos")
        .orderBy("Fecha", "desc")
        .where("Fecha", ">=", inicioDeMes)
        .where("Fecha", "<=", finDeMes)
        .where("Id_User", "==", usuario.uid)
        .onSnapshot((snapshot) => {
          establecerGastos(
            snapshot.docs.map((documento) => {
              return { ...documento.data(), id: documento.id };
            }),
          );
        });
      // Al desmotar el hook hay que romper la conexcion.
      return unsuscribe;
    }
  }, [usuario]);

  return gastos;
}

export default useObtenerGastosDelMes;
