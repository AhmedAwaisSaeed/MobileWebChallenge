import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import User from '../constants/DummyUser';
const initialState = {
  userInformation: {...User},
};

const store = combine(initialState, (set, get) => ({
  setUserInformation: userInformation => set({userInformation}),
}));

export const useUserStore = create(store);
