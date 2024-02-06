import styled from "styled-components";
import {color} from "@/style/variables";

export const Input = styled.input `
    display: flex;
    width: 100%;
    height: 25px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    
    background-color: rgba(0,0,0,0);
    
    border: none;    
    border-bottom: 1px solid ${color.text[1]};
    outline: none;
    transition: 0.2s ease;
    
    &:focus {
        border-bottom: 1px solid ${color.accent.pink};
    }
    //&:-webkit-autofill {
    //    appearance: none;
    //    background-image: none !important;
    //    background-color: red !important;
    //    -webkit-box-shadow: 0 0 0 30px red inset !important;
    //    color: red !important;
    //}
    

`