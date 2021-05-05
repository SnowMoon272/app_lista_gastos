/* Librarys & Frameworks */
import React from "react";
/* Assets & CSS */
import styled from "styled-components";
import convertirAMoneda from "../Funciones/convertirAMoneda";
import theme from "../Assets/Colors";
import { useTotalDelMes } from "../contextos/TotalGastadoEnElMesContext";

const BarraTotal = styled.div`
  background: ${theme.verde};
  font-size: 1.25rem; /* 20px */
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.62rem 2.25rem; /* 10px 40px */
  font-family: Work Sans;

  @media (max-width: 31.25rem) {
    /* 500px */
    flex-direction: column;
    font-size: 14px;
  }
`;

const BarraTotalGastado = () => {
  const { Total } = useTotalDelMes();

  return (
    <BarraTotal>
      <p>Total Gastado en el mes:</p>
      <p>{convertirAMoneda(Total)}</p>
    </BarraTotal>
  );
};

export default BarraTotalGastado;
