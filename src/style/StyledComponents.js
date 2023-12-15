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
    

`