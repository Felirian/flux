import React from 'react';
import styled from "styled-components";
import {Title} from "@/style/TextTags";

const Error = () => {
  return (
    <Page404>
      <Title>Странциа не найдена</Title>
    </Page404>
  );
};

const Page404 = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    
  }
`

export default Error;