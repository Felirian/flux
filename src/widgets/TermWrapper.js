import React from 'react';
import styled from "styled-components";

const TermWrapper = ({children}) => {
  return (
    <TermContainer>
      {children}
    </TermContainer>
  );
};

const TermContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default TermWrapper;