/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useContext } from "react";
import useObtenerGastosDelMes from "../Hooks/useObtenerGastosDelMes";

// Variable Global.
const TotalGastadoContext = React.createContext();

const useTotalDelMes = () => useContext(TotalGastadoContext);

// Provedor de la variable local.
const TotalGastadoProvider = ({ children }) => {
  // Estado del provedor.
  const [total, cambiarTotal] = useState(0);
  const gastos = useObtenerGastosDelMes();

  useEffect(() => {
    let acumulado = 0;
    gastos.forEach((gasto) => {
      acumulado += gasto.Cantidad;
    });
    cambiarTotal(acumulado);
  }, [gastos]);

  return (
    <TotalGastadoContext.Provider value={{ Total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider, useTotalDelMes };
