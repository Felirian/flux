import React, {useState} from 'react';
import {H1, H3, H4} from "@/style/styledComponents";
import s from './header.module.scss'
import cn from 'classnames'
import styled from "styled-components";

import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders";

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn(s.headerWrapper, open ? s.open : s.close)}>

      <div className={s.menuGroup}>
        <button
          className={'Button'}
          onClick={() => (setOpen(!open))}
        >
          <SvgSelector svg={'Burger'}/>
        </button>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <H3>Header</H3>
        </LiveBorders>
        <div>
          <H3>Header</H3>
        </div>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
      </div>

      <div className={s.menuGroup}>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
      </div>

      <div className={s.menuGroup}>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
        <div className={'Button'}>
          <H3>Header</H3>
        </div>
      </div>
    </div>
  );
};
