import React, { Fragment, useState } from "react";
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
  font-weight: 700;
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

function App() {
  const [frase, setFrase] = useState({
    quote: "",
    autor: "",
  });

  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const response = await api.json();

    console.log(response[0]);

    setFrase({
      quote: response[0].quote,
      autor: response[0].author,
    });
  };

  const { quote, autor } = frase;

  return (
    <Fragment>
      <ContainerFrase>
        <Frase>{quote !== '' ? `"${quote}"` : null}</Frase>
        <EscritoPor>{autor !== "" ? `- ${autor}` : null}</EscritoPor>
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
