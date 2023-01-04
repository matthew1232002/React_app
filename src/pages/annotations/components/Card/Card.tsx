import React from 'react';
import css from './card.module.scss';
import { CardProps } from '~/pages/annotations/types';
import { useMediaQuery } from 'react-responsive'
import 'react-popper-tooltip/dist/styles.css';
import { BIG_CARD, SMALL_CARD } from '~/pages/annotations/constants';


const Card: React.FC<CardProps> = ({children, styles, id, triggerRef}) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' })
  const cardWidth = isSmallScreen ? SMALL_CARD : BIG_CARD

  return (
    <div className={css.wrapper} style={{ ...styles, width: cardWidth}}>
      <div ref={triggerRef} className={css.dot} onClick={(e) => e.stopPropagation()}>
        {id}
      </div>
      {children}
    </div>
  );
};

export default Card;