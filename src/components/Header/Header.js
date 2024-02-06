import React, {useContext, useEffect, useState} from 'react';
import s from './header.module.scss';
import cn from 'classnames';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import Link from "next/link";
import {authContext} from "@/shared/Context";
import {checkUserName} from "@/supabase/services";
import styled from "styled-components";
import {BREAKPOINTS, COLOR} from "@/style/variables";
import {useMediaQuery} from "@mui/material";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useContext(authContext)
  const [username, setUsername] = useState(null);

  const laptop = useMediaQuery(BREAKPOINTS.mobile);

  useEffect(() => {
    if (auth) {
      checkUserName()
        .then(result => setUsername(result.toString()))
        .catch(error => console.error('Ошибка:', error.message));
    }
  }, [auth]);

  const HEADER_LINKS = [
    ['/',[
      {ref: '#main-slider', name: 'Магазин', svg: 'Store'},
      {ref: '#sale', name: 'Скидки', svg: 'Sale'},
      {ref: '#category-1', name: 'Категории', svg: 'Categories'},
      {ref: '#search', name: 'Поиск', svg: 'Search'},
    ]],
    ['',[
      {ref: '/news', name: 'Новости', svg: 'News'},
      {ref: '/refill', name: 'Пополнение', svg: 'Refill'}
    ]],
    ['/account',[
      {ref: '/settings', name: 'Настройки', svg: 'Settings'},
      {ref: `/basket`, name: 'Корзина', svg: 'Basket'},
      {
        ref: `${username !== null ? '/f' : '/auth'}`,
        name: `${username !== null ? username : 'Войти'}`,
        svg: 'Account'
      }],
    ],
  ]

  return (
    <HeaderWrapper open={open}>
      <LiveBorders>
        <div className={s.menuGroup}>
          <button
            onClick={() => (setOpen(!open))}
          >
            <SvgSelector svg={'Burger'}/>
          </button>
        </div>
      </LiveBorders>

      {HEADER_LINKS.map((group, index)=> (
        <MenuGroup>
          {group[1].map((link, i)=>(
            <LiveBorders>
              <Link href={group[0] + link.ref}>
                <SvgSelector svg={link.svg}/>
                <h4>{link.name}</h4>
              </Link>

            </LiveBorders>
          ))}
        </MenuGroup>
      ))}

    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  transition: 0.5s ease;
  background-color: ${COLOR.bg[1]};
  
  overflow: hidden;
  
  width: ${(props)=> props.open ? '40px' : '180px'};

  @media ${BREAKPOINTS.tablet} {
    position: absolute;
    left: 0;
    top: 0;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 100%;
    flex-direction: row;
    height: ${(props)=> props.open ? '40px' : '180px'};
    overflow-y: hidden;
  }
  @media ${BREAKPOINTS.smallMobile} {
    
  }
`

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  a {
    display: flex;
    width: 180px;
    //padding: 10px;
    align-items: center;
    gap: 10px;
    svg {
      width: 40px;
    }
    @media ${BREAKPOINTS.mobile} {
      width: fit-content;
      h4 {display: none}
    }
  }
  @media ${BREAKPOINTS.mobile} {
    
  }
`
