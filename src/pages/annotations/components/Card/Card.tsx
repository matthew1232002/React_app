import React from 'react';
import css from './card.module.scss';
import { CardProps } from '~/pages/annotations/types';
import 'react-popper-tooltip/dist/styles.css';

const Card: React.FC<CardProps> = ({children, styles, id, triggerRef}) => {
  return (
    <div className={css.wrapper} style={{ ...styles}}>
      <div ref={triggerRef} className={css.dot} onClick={(e) => e.stopPropagation()}>
        {id}
      </div>
      {children}
    </div>
  );
};

export default Card;