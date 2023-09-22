import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  user: any;
  isLoading: boolean;
  isError: boolean | null;
  diet: any;
  user_log: any;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  isError: false,
  diet: {
    diet_id: null,
    recipes: [
      { breakfast: [] },
      { lunch: [] },
      { dinner: [] },
      { snack1: [] },
      { snack2: [] },
    ],
  },
  user_log: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.isLoading = true;
      state.isError = null;
    },
    fetchUserSuccess(state, action: PayloadAction<any>) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.isError = null;
    },
    fetchUserFailure(state, _action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
    },
    userLogIdAdded(state,action){
      state.user_log=action.payload
    },
    fetchDietStart(state) {
      state.isLoading = true;
      state.isError = null;
    },
    fetchDietSuccess(state, action: PayloadAction<any>) {
      state.diet=action.payload
      state.isLoading = false;
      state.isError = null;
    },
    fetchDietFailure(state) {
      state.isLoading = false;
      state.isError = true;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    removeIsLoading(state) {
      state.isLoading = false;
    },
    setIsError(state) {
      state.isError = true;
    },
    clearStore(state) {
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.diet = null;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  fetchDietStart,
  fetchDietSuccess,
  fetchDietFailure,
  setIsLoading,
  removeIsLoading,
  setIsError,
  clearStore,
  userLogIdAdded,
} = userSlice.actions;

export default userSlice.reducer;
