import React, { useState } from 'react';
import css from './annotation.module.scss';
import deleteIcon from '~/assets/images/delete_icon.svg'
import Card from '~/pages/annotations/components/Card/Card';
import { AnnotationProps } from '~/pages/annotations/types';

const Annotation: React.FC<AnnotationProps> = ({ top, left, annotation }) => {
  const [isShow, setIsShow] = useState(false)
  const nameArr = annotation.author.split(' ');
  const initials = nameArr[0][0] + nameArr[1][0]

  return (
    <Card styles={{top, left}} setIsShow={setIsShow}>
      {isShow && <div className={css.annotation}>
        <div className={css.initials}>{initials}</div>
        <div className={css.text}>
          <p>{annotation.author}</p>
          <span>{annotation.comment}</span>
        </div>
        <img src={deleteIcon}/>
      </div>}
    </Card>
  );
};

export default Annotation;