import { useCallback } from 'react';
import { useAppDispatch } from '~/store/store';
import { useSelector } from 'react-redux';
import { selectAnnotationData, selectAnnotationState } from '~/pages/annotations/redux/annotations.selectors';
import { annotationsFetch } from '~/pages/annotations/redux/annotations.actions';

export const useAnnotations = () => {
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => dispatch(annotationsFetch()), [dispatch]);

  const data = useSelector(selectAnnotationData);
  const state = useSelector(selectAnnotationState);
  return {
    fetch,
    data,
    state,
  };
};
