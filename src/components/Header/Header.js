import React, {useState} from 'react';
import {LiveBorder} from "@/style/styledComponents";
//import s from './header.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <header
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