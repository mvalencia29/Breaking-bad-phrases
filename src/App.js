import React, { Fragment } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ContainerFrase = styled.div`
  margin-top: 10%;
  margin-left: 60px;
  width: 40%;
  word-break: break-all;
  padding: 15px;
  -webkit-appearance: none;
`;

const Frase = styled.p`
  text-align: center;
  -webkit-appearance: none;
`;

const EscritoPor = styled.p`
  text-align: end;
`;

const ContainerButton = styled.div`
  margin-top: 5%;
  margin-left: 75px;
  width: 40%;
  padding: 15px;
  text-align: center;
`;

const consultarApi = () => {
  
};

function App() {
  return (
    <Fragment>
      <ContainerFrase>
        <Frase>
          Hobsyuddddddddddddddddddddddddddddddddddddddddddddddddd
          ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Frase>
        <EscritoPor>FYTGUJHJL</EscritoPor>
      </ContainerFrase>
      <ContainerButton>
        <Button variant="outline-dark" onClick={consultarApi}>
          Obtener Frase
        </Button>
      </ContainerButton>
    </Fragment>
  );
}

export default App;
