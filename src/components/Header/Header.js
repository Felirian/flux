import React, {useState} from 'react';
import s from './header.module.scss';
import cn from 'classnames';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders";

export const Header = () => {
  const [open, setOpen] = useState(false);

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
          <h3>Header</h3>
        </LiveBorders>
        <div>
          <h3>Header</h3>
        </div>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
      </div>

      <div className={s.menuGroup}>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
      </div>

      <div className={s.menuGroup}>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
        <div className={'Button'}>
          <h3>Header</h3>
        </div>
      </div>
    </div>
  );
};
