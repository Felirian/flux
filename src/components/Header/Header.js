import React, {useState} from 'react';
import {H1, H3, H4, LiveBorder} from "@/style/styledComponents";
import styled from "styled-components";
import SvgSelector from "@/components/SvgSelector";


const Header = () => {
  const [open, setOpen] = useState(false)

  const HeaderComponent = styled.header`
      display: flex;      
      height: 100vh;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      flex-shrink: 0;
      transition: 0.5s ease;     
  `
  const MenuGroup = styled.div `
      display: flex;      
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      button {
          padding: 10px;
      }
  `

  return (
    <div>
      <HeaderComponent>
        <MenuGroup>
          <button
            className={'Button'}
            onClick={()=>(setOpen(!open))}
          >
            <SvgSelector svg={'Burger'}/>
          </button>
        </MenuGroup>
        <MenuGroup>
          <LiveBorder>
            <H3>Header</H3>
          </LiveBorder>
          <LiveBorder>
            <H3>Header</H3>
          </LiveBorder>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
        </MenuGroup>

        <MenuGroup>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
        </MenuGroup>

        <MenuGroup>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
          <div className={'Button'}>
            <H3>Header</H3>
          </div>
        </MenuGroup>
      </HeaderComponent>
    </div>
  );
};


export default Header;