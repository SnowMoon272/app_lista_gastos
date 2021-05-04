import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  padding: 2.5rem; /* 40px */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 60rem) {
    /* 950px */
    justify-content: start;
  }
`;

const Titulo = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 2.5rem; /* 40px */

  @media (max-width: 60rem) {
    /* 950px */
    font-size: 2rem; /* 32px */
  }
`;

const ContenedorHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 60rem) {
    /* 950px */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem; /* 20px */
      justify-content: center;
    }
  }
`;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Header, Titulo, ContenedorHeader, ContenedorBotones };
