import { PassportReducer } from './PassportReducer';
import { createStore } from 'redux';

export const PassportStore = createStore(PassportReducer);