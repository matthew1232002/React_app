import { ReactNode } from 'react';
import * as React from 'react';

export interface CreateAnnotation {
  author: string;
  comment: string;
  pos: {
    x: number;
    y: number;
  }
}

export interface AnnotationResponse extends CreateAnnotation{
  id: number;
}

export interface AnnotationDeleteResponse {
  id: number;
}

export interface FormProps {
  anchorEl: {
    top: number;
    left: number;
  },
  containerEl: {
    width: number;
    height: number;
  }
  setIsFormOpen: (state: boolean) => void
}

export interface CardProps {
  children: ReactNode;
  styles: { [key: string]: string; }
  triggerRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  id?: number;
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
