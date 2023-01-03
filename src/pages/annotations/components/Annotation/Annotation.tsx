import React, { useState, MouseEvent } from 'react';
import css from './annotation.module.scss';
import deleteIcon from '~/assets/images/delete_icon.svg'
import Card from '~/pages/annotations/components/Card/Card';
import { AnnotationProps } from '~/pages/annotations/types';
import { useAnnotations } from '~/pages/annotations/hooks/useAnnotations';

const Annotation: React.FC<AnnotationProps> = ({ top, left, annotation }) => {
  const [isShow, setIsShow] = useState(false)
  const {remove} = useAnnotations();
  const nameArr = annotation.author.split(' ');
  const initials = nameArr[0][0] + nameArr[1][0]

  const onRemoveHandler = (e: MouseEvent<HTMLImageElement>, id: number) => {
    e.stopPropagation()
    remove(id);
  }

  return (
    <Card styles={{top, left}} setIsShow={setIsShow}>
      {isShow && <div className={css.annotation}>
        <div className={css.initials}>{initials}</div>
        <div className={css.text}>
          <p>{annotation.author}</p>
          <span>{annotation.comment}</span>
        </div>
        <img src={deleteIcon} onClick={(e) => onRemoveHandler(e, annotation.id)}/>
      </div>}
    </Card>
  );
};

export default Annotation;