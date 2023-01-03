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

export const annotationCreate = createAsyncThunk<any, any>('annotations/post', async (payload, {rejectWithValue}) => {
  try {
    const { data } = await api.post(`annotations`, payload);

    return data;
  } catch (err) {
    return rejectWithValue((err as AxiosError));
  }
});

export const annotationDelete = createAsyncThunk<any, number>('annotations/delete', async (payload, {rejectWithValue}) => {
  try {
    const { data } = await api.delete(`annotations/${payload}`);

    return {id: payload};
  } catch (err) {
    return rejectWithValue((err as AxiosError));
  }
});