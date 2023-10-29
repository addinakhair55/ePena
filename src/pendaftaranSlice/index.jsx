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
    editPendaftaran: (state, action) => {
      const { index, updatedPendaftaran } = action.payload;
      state.pendaftarans[index] = updatedPendaftaran;
    },
    deletePendaftaran: (state, action) => {
      const index = action.payload;
      state.pendaftarans.splice(index, 1);
    },
  },
});

export const { addPendaftaran, editPendaftaran, deletePendaftaran } = pendaftaranSlice.actions;

export default pendaftaranSlice.reducer;
