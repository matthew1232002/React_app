import React, { FormEvent, useRef } from 'react';
import css from './form.module.scss';
import sendIcon from '~/assets/images/send_icon.svg';
import Card from '~/pages/annotations/components/Card/Card';
import { FormProps } from '~/pages/annotations/types';
import { useAnnotations } from '~/pages/annotations/hooks/useAnnotations';
import { useMediaQuery } from 'react-responsive';

const Form: React.FC<FormProps> = ({anchorEl, setIsFormOpen, containerEl}) => {
  const {create} = useAnnotations();
  const inputRef = useRef<HTMLInputElement>(null);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' })
  const cardWidth = isSmallScreen ? 180 : 316
  const styles = {
    top: anchorEl.top + 'px',
    left: anchorEl.left - cardWidth / 2 + 'px',
    pointerEvents: 'none'
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current!.value.trim();
    const x = (anchorEl.left / containerEl.width).toFixed(4);
    const y = (anchorEl.top / containerEl.height).toFixed(4)
    const data = {
      author: 'Matvey Lazarev',
      comment: value,
      pos: {
        x,
        y,
      }
    }
    if (value) {
      setIsFormOpen(false);
      create(data);
    }
  }

  return (
    <Card styles={styles}>
      <form onSubmit={onSubmitHandler} className={css.form} onClick={(e) => e.stopPropagation()}>
        <div>
          <input ref={inputRef} placeholder='Leave a comment'/>
          <button type='submit'>
            <img src={sendIcon}/>
          </button>
        </div>
      </form>
    </Card>

  );
};

export default Form;