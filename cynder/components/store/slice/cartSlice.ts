import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  qty: number;
  image: string[];
}

type CartProduct = Product & {
  quantity: number;
};

export interface CartState {
  cart: CartProduct[];
}
interface IncreaseQuantityPayload {
  id: number;
}

interface DecreaseQuantityPayload {
  id: number;
}

interface RemoveItemPayload {
  id: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] } as CartState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInCart) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<IncreaseQuantityPayload>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<DecreaseQuantityPayload>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
