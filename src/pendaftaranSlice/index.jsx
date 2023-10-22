import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pendaftarans: [],
};

const pendaftaranSlice = createSlice({
  name: 'pendaftaran',
  initialState,
  reducers: {
    addPendaftaran: (state, action) => {
      state.pendaftarans.push(action.payload);
    },
  },
});

export const { addPendaftaran } = pendaftaranSlice.actions;

export default pendaftaranSlice.reducer;
