import React, { useEffect, MouseEvent } from 'react';
import css from './card.module.scss';
import useComponentVisible from '~/hooks/useComponentVisible';
import { CardProps } from '~/pages/annotations/types';
import { useMediaQuery } from 'react-responsive'


const Card: React.FC<CardProps> = ({children, setIsShow, styles, id}) => {
  const { ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' })
  const cardWidth = isSmallScreen ? 180 : 316

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
    <div className={css.wrapper} style={{ ...styles, width: cardWidth }}>
      <div ref={ref} className={css.dot} onClick={onClickHandler}>{id}</div>
      {children}
    </div>
  );
};

export default Card;