import { createSlice } from "@reduxjs/toolkit";

const receiptSlice = createSlice({
  name: "receipt",
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.data = state.data.some((item) => item.id === action.payload.id)
        ? state.data.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, count: item.count + 1 };
            }
            return item;
          })
        : [...state.data, { ...action.payload, count: 1 }];

      state.total = state.data.reduce(
        (acc, rec) => acc + rec.count * rec.price,
        0
      );
    },
    removeProduct: (state, action) => {
      state.data =
        state.data.find((item) => item.id === action.payload.id).count > 1
          ? state.data.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, count: item.count - 1 };
              }
              return item;
            })
          : state.data.filter((el) => el.id !== action.payload.id);
      state.total = state.data.reduce(
        (acc, rec) => acc + rec.count * rec.price,
        0
      );
    },
  },
});

export const { addProducts, removeProduct } = receiptSlice.actions;
export default receiptSlice.reducer;
