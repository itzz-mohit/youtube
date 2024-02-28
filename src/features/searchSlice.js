import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
  },
  reducers: {
    getSearchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { getSearchText } = searchSlice.actions;
export default searchSlice.reducer;
