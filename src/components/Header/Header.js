import React, {useState} from 'react';
import s from './header.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={s.header_wrapper}>
      <header
        className={open ? s.open : ''}
        onClick={()=> setOpen(!open)}
      >
        <div className={'Button'}>
          <h1>Header</h1>
        </div>
        <div className={'Button'}>
          <h1>Header</h1>
        </div>
        <div className={'Button'}>
          <h1>Header</h1>
        </div>
        <div className={'Button'}>
          <h1>Header</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;