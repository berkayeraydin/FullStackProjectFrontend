import { createAction, props } from '@ngrx/store';
import { LoggedInUserModel } from '../../models/loggedInUserModel';

export const login = createAction('[Auth] Login', props<LoggedInUserModel>());

export const logout = createAction('[Auth] Logout');
