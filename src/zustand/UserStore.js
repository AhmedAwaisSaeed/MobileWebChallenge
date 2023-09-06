import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import User from '../constants/DummyUser';
import uuid from 'react-native-uuid';
// import faker from 'faker';
const initialState = {
  userInformation: {...User},
  allVideoCategores: [
    {
      _id: uuid.v4(),
      title: 'All',
      pressed: true,
    },
    {
      _id: uuid.v4(),
      title: 'Marketing Videos',
      pressed: false,
    },
    {
      _id: uuid.v4(),
      title: 'Ai Generated',
      pressed: false,
    },
  ],
  currentTab: 0,
};

const store = combine(initialState, (set, get) => ({
  setUserInformation: userInformation => set({userInformation}),
  addCollaboraterStore: email => {
    let tempUserInformation = {...get().userInformation};
    tempUserInformation.collaboraters.push({
      _id: uuid.v4(),
      name: email,
      email: email,
      role: 'collaborater',
      avatar:
        'https://i.pravatar.cc/300?img=' +
        tempUserInformation.collaboraters.length,
    });
    set({userInformation: tempUserInformation});
  },
  setPressedState: index => {
    let tempAllVideoCategores = [...get().allVideoCategores];
    tempAllVideoCategores?.forEach((category, currentIndex) => {
      if (currentIndex === index) {
        category.pressed = !category.pressed;
      } else {
        category.pressed = false;
      }
    });
    set({
      allVideoCategores: tempAllVideoCategores,
    });
  },
  deleteCollaboraterStore: idToRemove => {
    let tempUserInformation = {...get().userInformation};
    const indexToRemove = tempUserInformation.collaboraters.findIndex(
      item => item._id === idToRemove,
    );

    if (indexToRemove !== -1) {
      tempUserInformation.collaboraters.splice(indexToRemove, 1);
    }
    set({userInformation: tempUserInformation});
  },
  setCurrentTab: currentTab => set({currentTab}),
}));

export const useUserStore = create(store);
