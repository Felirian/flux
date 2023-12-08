import React, {useState} from 'react';
import {H1} from "@/style/styledComponents";


const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <header
        onClick={()=> setOpen(!open)}
      >
        <div className={'Button'}>
          <H1>Header</H1>
        </div>
        <div className={'Button'}>

          <H1>Header</H1>
        </div>
        <div className={'Button'}>
          <H1>Header</H1>
        </div>
        <div className={'Button'}>
          <H1>Header</H1>
        </div>
      </header>
    </div>
  );
};

export default Header;