import React, { MouseEvent } from 'react';
import css from './annotation.module.scss';
import deleteIcon from '~/assets/images/delete_icon.svg'
import Card from '~/pages/annotations/components/Card/Card';
import { AnnotationProps } from '~/pages/annotations/types';
import { useAnnotations } from '~/pages/annotations/hooks/useAnnotations';
import { usePopperTooltip } from 'react-popper-tooltip';

const Annotation: React.FC<AnnotationProps> = ({ top, left, annotation }) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({trigger: 'click', closeOnOutsideClick: true});
  const {remove} = useAnnotations();
  const nameArr = annotation.author.split(' ');
  const initials = nameArr[0][0] + nameArr[1][0]

  const onRemoveHandler = (e: MouseEvent<HTMLImageElement>, id: number) => {
    e.stopPropagation()
    remove(id);
  }

  return (
    <Card styles={{top, left}} id={annotation.id} triggerRef={setTriggerRef}>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />

          <div className={css.annotation}>
            <div className={css.initials}>{initials}</div>
            <div className={css.text}>
              <div>
                <p>{annotation.author}</p>
                <img src={deleteIcon} onClick={(e) => onRemoveHandler(e, annotation.id)}/>
              </div>
              <span>{annotation.comment}</span>
            </div>
          </div>

        </div>
      )}
    </Card>
  );
};

export default Annotation;