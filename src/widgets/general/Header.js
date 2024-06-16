import React, {useState} from 'react';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders";
import Link from "next/link";
import styled from "styled-components";
import {BREAKPOINTS, COLOR} from "@/style/variables";
import {H4} from "@/style/TextTags";
import {useSession} from "@/supabase/services";
import {useMediaQuery} from "@mui/material";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  const { userMetaData, userError} = useSession()

  const HEADER_LINKS = [
    ['/', [
      {ref: '#main-slider', name: 'Магазин', svg: 'Store'},
      {ref: '#sale', name: 'Скидки', svg: 'Sale'},
      {ref: '#category', name: 'Категории', svg: 'Categories'},
      {ref: '#search', name: 'Поиск', svg: 'Search'},
    ]],
    ['/account', [
      {ref: `${userMetaData && !userError ? `/basket` : '/auth'}`, name: 'Корзина', svg: 'Basket'},
      {
        ref: `${userMetaData && !userError ? `/${userMetaData.slug}` : '/auth'}`,
        name: `${userMetaData && !userError ? userMetaData.name : 'Войти'}`,
        svg: 'Account'
      }],
    ],
  ]

  return (
    <HeaderContainer open={open}>
      {!isMobile ? (
        <HeaderWrapper
          open={open}
        >
          <LiveBorders>
            <MenuGroup>
              <button
                onClick={() => (setOpen(!open))}
              >
                <SvgSelector svg={'Burger'}/>
              </button>
            </MenuGroup>
          </LiveBorders>

          {HEADER_LINKS.map((group, index) => (
            <MenuGroup key={`header_group_${index}`} open={open}>
              {group[1].map((link, i) => (
                <LiveBorders key={i}>
                  <Link href={group[0] + link.ref}>
                    <SvgSelector svg={link.svg}/>
                    <H4 style={{transitionDelay: `${i / 10}s`}}>{link.name}</H4>
                  </Link>
                </LiveBorders>
              ))}
            </MenuGroup>
          ))}

        </HeaderWrapper>
      ) : (
        <>
          <LiveBorders>
            <MenuGroup>
              <button
                onClick={() => (setOpen(!open))}
              >
                <SvgSelector svg={'Burger'}/>
              </button>
            </MenuGroup>
          </LiveBorders>

          <LiveBorders>
            <MenuGroup>
              <Link href={HEADER_LINKS[1][0] + HEADER_LINKS[1][1][1].ref} onClick={() => (setOpen(false))}>
                <SvgSelector svg={HEADER_LINKS[1][1][1].svg}/>
                {/*<H4 style={{transitionDelay: `${i/10}s`}}>{link.name}</H4>*/}
              </Link>
            </MenuGroup>

          </LiveBorders>

          <HeaderWrapper
            open={open}
          >
            {HEADER_LINKS.slice(0,2).map((group, index) => (
              <MenuGroup key={`header_group_${index}`} open={open}>
                {group[1].map((link, i)=>(
                  <LiveBorders key={i} width={'100%'}>
                    <Link href={group[0] + link.ref} onClick={() => (setOpen(false))}>
                      <SvgSelector svg={link.svg}/>
                      <H4 style={{transitionDelay: `${i/10}s`}}>{link.name}</H4>
                    </Link>
                  </LiveBorders>
                ))}
              </MenuGroup>
            ))}

          </HeaderWrapper>
        </>
      )}


    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: ${(props) => props.open ? '180px' : '40px'};
  transition: 0.5s;
  height: 100%;
  @media ${BREAKPOINTS.laptop} {
    width: 4.76vw;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 100%;
    height: 11.11vw;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;

    display: flex;
    justify-content: space-between;

    background-color: ${COLOR.bg[1]};
  }
`

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

  width: ${(props) => props.open ? 180 : 40}px;

  position: fixed;
  left: 0;
  top: 0;

  z-index: 100;
  @media ${BREAKPOINTS.laptop} {
    width: ${(props) => props.open ? 21.43 : 4.76}vw;
  }
  @media ${BREAKPOINTS.mobile} {
    padding-top: 11.11vw;
    width: 50vw;
    height: 100lvh;
    padding-bottom: 8vh;
    z-index: -1;
    left: ${(props) => props.open ? 0 : -50}vw;
  }
`

const MenuGroup = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${H4} {
    transition: 0.5s;
    transition-delay: ${(props) => !props.open && 0}s !important;
    opacity: ${(props) => props.open ? 1 : 0};
  }

  svg {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    @media ${BREAKPOINTS.laptop} {
      width: 4.76vw;
      height: 4.76vw;
    }
    @media ${BREAKPOINTS.mobile} {
      width: 11.11vw;
      height: 11.11vw;
    }
  }

  a {
    transition: 0.5s;
    display: flex;
    width: ${(props) => props.open ? 180 : 40}px;
    //padding: 10px;
    align-items: center;
    gap: 10px;
    @media ${BREAKPOINTS.laptop} {
      gap: 1.19vw;
      width: ${(props) => props.open ? 21.43 : 4.76}vw;
    }
    @media ${BREAKPOINTS.mobile} {
      gap: 1.19vw;
      width: 100%;
    }
  }
`
