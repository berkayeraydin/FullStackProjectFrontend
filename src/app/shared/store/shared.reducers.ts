import { authReducer } from './auth/auth.reducer';
import { cartReducer } from './cart/cart.reducer';

export const sharedReducers = {
  auth: authReducer,
  cart: cartReducer,
};

export interface SharedState {
  auth: any;
  cart: any[];
}
