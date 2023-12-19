import React, {useContext, useEffect, useState} from 'react';
import s from './header.module.scss';
import cn from 'classnames';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import {HashLink} from "react-router-hash-link";
import Link from "next/link";
import {authContext} from "@/components/Context";
import {checkSession, checkUserName, GET_USER} from "@/supabase/services";
import {log} from "next/dist/server/typescript/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useContext(authContext)
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (auth) {
      checkUserName()
        .then(result => setUsername(result.toString()))
        .catch(error => console.error('Ошибка:', error.message));
    }
  }, [auth]);

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
          <Link href={'/#a'} onClick={() => console.log(checkUserName())}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'} >
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
          <Link href={'/auth'}>
            <SvgSelector svg={'Account'}/>
            <h4>{auth ? (username !== null ? username : 'Загрузка...') : 'ВОЙТИ'}</h4>
          </Link>
        </LiveBorders>
      </div>
    </div>
  );
};
