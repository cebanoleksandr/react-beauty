
import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../utils/interfaces';

interface UserState {
  client: IUser | null;
}

const initialState: UserState = {
  client: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAC: (state, action: { payload: IUser }) => {
      state.client = action.payload;
    },
    removeUserAC: (state) => {
      state.client = null;
    },
  },
});

export const { setUserAC, removeUserAC } = userSlice.actions;
export default userSlice.reducer;
