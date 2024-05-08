import styled from "styled-components";
import {COLOR} from "@/style/variables";

export const Input = styled.input `
  display: flex;
  width: 100%;
  height: 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  background-color: rgba(0, 0, 0, 0);

  border: none;
  border-bottom: 1px solid ${COLOR.text[1]};
  outline: none;
  transition: 0.2s ease;

  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &:focus {
    border-bottom: 1px solid ${COLOR.accent.pink};
  }
  &::placeholder {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  //&:-webkit-autofill {
  //    appearance: none;
  //    background-image: none !important;
  //    background-color: red !important;
  //    -webkit-box-shadow: 0 0 0 30px red inset !important;
  //    color: red !important;
  //}


`