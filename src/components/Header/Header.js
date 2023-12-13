import React, {useState} from 'react';
import s from './header.module.scss';
import cn from 'classnames';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import {HashLink} from "react-router-hash-link";
import Link from "next/link";

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
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Account'}/>
            <h4>Войти</h4>
          </Link>
        </LiveBorders>
      </div>
    </div>
  );
};
