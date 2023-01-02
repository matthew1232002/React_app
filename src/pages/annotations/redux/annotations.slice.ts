import { createSlice } from '@reduxjs/toolkit';
import { annotationsFetch } from '~/pages/annotations/redux/annotations.actions';
import { StateType } from '~/pages/annotations/types';

const initialState: StateType = {
  state: 'idle',
  data: [],
};

const annotationsSlice = createSlice({
  name: 'annotations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(annotationsFetch.fulfilled, (state, { payload }) => {
      state.state = 'fulfilled';
      state.data = payload;
    });
  },
});

export { annotationsSlice };
