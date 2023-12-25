import React, {useContext, useEffect, useState} from 'react';
import s from './header.module.scss';
import cn from 'classnames';
import SvgSelector from "@/components/SvgSelector";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import Link from "next/link";
import {authContext} from "@/components/Context";
import {checkUserName} from "@/supabase/services";

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
    <div className={cn(s.headerWrapper, !open ? s.open : s.close)}>
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
          <Link href={'/#main_game'} onClick={() => console.log(checkUserName())}>
            <SvgSelector svg={'Store'}/>
            <h4>Магазин</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#sale'} >
            <SvgSelector svg={'Sale'}/>
            <h4>Скидки</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#category_1'}>
            <SvgSelector svg={'Categories'}/>
            <h4>Категории</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#search'}>
            <SvgSelector svg={'Search'}/>
            <h4>Поиск</h4>
          </Link>
        </LiveBorders>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'News'}/>
            <h4>Новости</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Refill'}/>
            <h4>Пополнение</h4>
          </Link>
        </LiveBorders>
      </div>

      <div className={s.menuGroup}>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Settings'}/>
            <h4>Настройки</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={'/#a'}>
            <SvgSelector svg={'Basket'}/>
            <h4>Корзина</h4>
          </Link>
        </LiveBorders>
        <LiveBorders>
          <Link href={username !== null ? '/account/f' : '/auth'}>
            <SvgSelector svg={'Account'}/>
            <h4>{username !== null ? username : 'Войти'}</h4>
          </Link>
        </LiveBorders>
      </div>
    </div>
  );
};
