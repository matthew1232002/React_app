import React, { useEffect, MouseEvent } from 'react';
import css from './card.module.scss';
import { CARD_WIDTH } from '~/pages/annotations/constants';
import useComponentVisible from '~/hooks/useComponentVisible';
import { CardProps } from '~/pages/annotations/types';

const Card: React.FC<CardProps> = ({children, setIsShow, styles}) => {
  const { ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);

  useEffect(() => {
    if (setIsShow) {
      setIsShow(isComponentVisible);
    }

  },[isComponentVisible])

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsComponentVisible((prevState) => !prevState)
  }

  return (
    <div className={css.wrapper} style={{ ...styles, width: CARD_WIDTH }}>
      <div ref={ref} className={css.dot} onClick={onClickHandler}>1</div>
      {children}
    </div>
  );
};

export default Card;