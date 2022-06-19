import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BottomNavState {
  selected: string;
}

const initialState: BottomNavState = {
  selected: "home",
};

export const bottomNavSlice = createSlice({
  name: "bottomNav",
  initialState,
  reducers: {
    active: (state: BottomNavState, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { active } = bottomNavSlice.actions;
export default bottomNavSlice.reducer
