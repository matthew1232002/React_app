import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { api } from '~/services/api';
import { AnnotationResponse } from '~/pages/annotations/types';

export const annotationsFetch = createAsyncThunk<AnnotationResponse[]>('annotations', async (payload, {rejectWithValue}) => {
  try {
    const { data } = await api.get('annotations');

    return data;
  } catch (err) {
    return rejectWithValue((err as AxiosError));
  }
});