import { ReactNode } from 'react';

export interface AnnotationResponse {
  id: number;
  author: string;
  comment: string;
  pos: {
    x: number;
    y: number;
  }
}

export interface FormProps {
  anchorEl: {
    top: number;
    left: number;
  }
  setIsFormOpen: (state: boolean) => void
}

export interface CardProps {
  children: ReactNode;
  styles: { [key: string]: string; }
  setIsShow?: (state: boolean) => void
}

export interface AnnotationProps {
  top: string;
  left: string
  annotation: AnnotationResponse
}

type ReduxState = 'idle' | 'loading' | 'fulfilled' | 'failed';

export interface StateType {
  state: ReduxState;
  data: AnnotationResponse[];
}
