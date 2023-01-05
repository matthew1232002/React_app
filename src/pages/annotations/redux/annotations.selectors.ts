import { RootState } from '~/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const getAnnotation = (state: RootState) => state.annotations;
export const selectAnnotationData = createSelector(getAnnotation, ({ data }) => data);
export const selectAnnotationState = createSelector(getAnnotation, ({ state }) => state);
