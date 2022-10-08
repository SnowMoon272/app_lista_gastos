/* eslint-disable indent */
/* Librarys & Frameworks */
import React, { useEffect } from "react";
/* Assets & CSS */
import styled, { keyframes } from "styled-components";
import theme from "../Assets/Colors";

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem);
        opacity: 0;
    }

    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }

    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }

    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;

const ContenedorAlerta = styled.div`
  z-index: 1000;
  width: 100%;
  position: fixed;
  left: 0;
  top: 1.25rem; /* 20px */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 5s ease forwards;

  p {
    background: ${(props) => {
      if (props.tipo === "error") {
        return theme.rojo;
      }
      if (props.tipo === "exito") {
        return theme.verde;
      }
      return "#000";
    }};
    color: #fff;
    padding: 1.25rem 2.5rem; /* 20px 40px */
    border-radius: 0.31rem; /* 5px */
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`;

function Alerta({ tipo, mensaje, estadoAlerta, cambiarEstadoAlerta }) {
  useEffect(() => {
    let tiempo;
    if (estadoAlerta === true) {
      tiempo = setTimeout(() => {
        cambiarEstadoAlerta(false);
      }, 5000);
    }
    return () => clearTimeout(tiempo);
  }, [estadoAlerta, cambiarEstadoAlerta]);

  return (
    <>
      {estadoAlerta && (
        <ContenedorAlerta tipo={tipo}>
          <p>{mensaje}</p>
        </ContenedorAlerta>
      )}
    </>
  );
}

export default Alerta;
