import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetResponse } from "@services/products/getProducts";

interface State {
  products: GetResponse[] | null;
  purchaseTotal: number;
}

const initialState: State = {
  products: null,
  purchaseTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<GetResponse>) => {
      if (state.products === null) {
        state.products = [action.payload];
        state.purchaseTotal = action.payload.price;
      } else {
        state.products = [action.payload, ...state.products];

        state.purchaseTotal = state.purchaseTotal + action.payload.price;
      }
    },
    setMoreItem: (state, action: PayloadAction<GetResponse>) => {
      if (state.products !== null) {
        const updatedProducts = state.products.map((product) => {
          if (
            product.id === action.payload.id &&
            product.amount !== undefined
          ) {
            return {
              ...product,
              amount: product.amount + 1,
            };
          }
          return product;
        });

        state.products = updatedProducts;
      }

      if (state.purchaseTotal) {
        state.purchaseTotal = state.purchaseTotal + action.payload.price;
      }
    },
    setLessItem: (state, action: PayloadAction<GetResponse>) => {
      if (state.products !== null) {
        if (action.payload.amount === 1) {
          state.products = state.products.filter(
            (product) => product.id !== action.payload.id
          );
        } else {
          const updatedProducts = state.products.map((product) => {
            if (
              product.id === action.payload.id &&
              product.amount !== undefined
            ) {
              return {
                ...product,
                amount: product.amount - 1,
              };
            }
            return product;
          });

          state.products = updatedProducts;
        }
      }

      if (state.purchaseTotal) {
        state.purchaseTotal = state.purchaseTotal - action.payload.price;
      }
    },
  },
});

export const { setCart, setLessItem, setMoreItem } = cartSlice.actions;
export default cartSlice.reducer;
