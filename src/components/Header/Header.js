import React, {useState} from 'react';
import s from './header.module.scss';
import cn from 'classnames';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(s.headerWrapper, open ? s.open : s.close)}>
      <LiveBorders>
        <div className={s.menuGroup}>
          <button
            onClick={() => (setOpen(!open))}
          >
            <SvgSelector svg={'Burger'}/>
          </button>
        </div>
      </LiveBorders>


      <div className={s.menuGroup}>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
        <LiveBorders>
          <h3>Header</h3>
        </LiveBorders>
      </div>
    </div>
  );
};
