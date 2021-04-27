import React from "react";
import styled from "styled-components";
import { ReactComponent as Puntos } from "../Images/puntos.svg";

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0;
  path {
    fill: rgba(61, 78, 233, 0.746);
  }
`;

const PuntosArriba = styled(Puntos)`
  position: fixed;
  z-index: 1;
  top: 2.5rem; /* 40px */
  left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem; /* 40px */
  right: 2.5rem; /* 40px */
`;

function Fondo() {
  return (
    <>
      <PuntosArriba />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          // fill="#0099ff"
          fillOpacity="1"
          d="M0,96L40,112C80,128,160,160,240,192C320,224,400,256,480,234.7C560,213,640,139,720,122.7C800,107,880,149,960,144C1040,139,1120,85,1200,74.7C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </Svg>
      <PuntosAbajo />
    </>
  );
}

export default Fondo;
