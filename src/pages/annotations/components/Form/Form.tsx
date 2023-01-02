import React, { FormEvent, useRef } from 'react';
import css from './form.module.scss';
import sendIcon from '~/assets/images/send_icon.svg';
import Card from '~/pages/annotations/components/Card/Card';
import { CARD_WIDTH } from '~/pages/annotations/constants';
import { FormProps } from '~/pages/annotations/types';

const Form: React.FC<FormProps> = ({anchorEl, setIsFormOpen}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const styles = {
    top: anchorEl.top + 'px',
    left: anchorEl.left - CARD_WIDTH / 2 + 'px',
    pointerEvents: 'none'
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current!.value.trim();
    if (value) {
      setIsFormOpen(false);
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