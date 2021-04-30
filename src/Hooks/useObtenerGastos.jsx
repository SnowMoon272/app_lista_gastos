import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../contextos/AuthContext";

const useObtenerGastos = () => {
  const { usuario } = useAuth();
  const [gastos, cambiarGastos] = useState([]);

  useEffect(() => {
    const unsuscribe = db
      .collection("gastos")
      .where("Id_User", "==", usuario.uid)
      .orderBy("Fecha", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        cambiarGastos(
          snapshot.docs.map((gasto) => {
            return { ...gasto.data(), id: gasto.id };
          }),
        );
      });
    return unsuscribe;
  }, [usuario]);

  return [gastos];
};

export default useObtenerGastos;
