import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { LoggedInUserModel } from '../../models/loggedInUserModel';

const getInitialAuthState = () => {
  if (localStorage.getItem('token')) {
    return { isAuthenticated: true, user: { username: 'etiyaakadaemi' } }; // jwt'den alınır..
  }
  return { isAuthenticated: false, user: {} };
};

const initialState = getInitialAuthState();

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return { isAuthenticated: true, user: action };
  }),
  on(logout, (state, action) => {
    return { isAuthenticated: false, user: {} };
  })
);

// State is immutable

// token var mı? => isAuthenticated:true user:{}
