import { createReducer, on } from '@ngrx/store';
import { addItemToCart, removeItemFromCart } from './cart.actions';

const getInitialCartState = (): any[] => {
  let cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const initialState: any[] = getInitialCartState();

export const cartReducer = createReducer(
  initialState,
  on(addItemToCart, (state, action) => {
    // ürünü kontrol et, eğer üründen daha önce eklenmişse o kayıtın adet'ini artırıcaz
    // ürün eklenmemişse yeni ürünü eklicez
    let existingCartItem = state.find((p) => p.product.id == action.product.id);

    if (existingCartItem) {
      let newState = [
        ...state.filter((c) => c.id != existingCartItem.id),
        {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.quantity,
        },
      ];
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    } else {
      let newState = [
        ...state,
        {
          id: Math.floor(Math.random() * 99999999),
          product: action.product,
          quantity: action.quantity,
        },
      ];
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }
  }),
  on(removeItemFromCart, (state, action) => {
    let newState = state.filter((s) => s.id != action.id);
    localStorage.setItem('cart', JSON.stringify(newState));
    return newState;
  })
);
