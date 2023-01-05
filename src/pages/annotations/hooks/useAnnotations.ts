import { useCallback } from 'react';
import { useAppDispatch } from '~/store/store';
import { useSelector } from 'react-redux';
import { selectAnnotationData, selectAnnotationState } from '~/pages/annotations/redux/annotations.selectors';
import { annotationCreate, annotationDelete, annotationsFetch } from '~/pages/annotations/redux/annotations.actions';
import { CreateAnnotation } from '~/pages/annotations/types';

export const useAnnotations = () => {
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => dispatch(annotationsFetch()), [dispatch]);
  const create = useCallback((data: CreateAnnotation) => dispatch(annotationCreate(data)), [dispatch]);
  const remove = useCallback((id: number) => dispatch(annotationDelete(id)), [dispatch]);

  const data = useSelector(selectAnnotationData);
  const state = useSelector(selectAnnotationState);
  return {
    fetch,
    remove,
    create,
    data,
    state,
  };
};
