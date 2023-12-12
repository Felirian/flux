import React from 'react';
import Image from "next/image";
import s from './cardCol2.module.scss'
import cn from 'classnames'
export const CardCol2 = ({slug, tags, price}) => {
  return (
    <div className={'Button'}>
      <div className={s.card}>
        <Image
          src={`${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/object/public/Images/items/${slug}/col_2_card_img.jpg`}
          alt={' '}
          width={228}
          height={135}
        />
        <div className={s.tags}>
          {tags.map((el, i)=>(
            <p className={'caption'} key={`Caption_${i}`}>{el.node.tags.name}</p>
          ))}
        </div>
        <h3>{price}</h3>
      </div>
    </div>
  );
};