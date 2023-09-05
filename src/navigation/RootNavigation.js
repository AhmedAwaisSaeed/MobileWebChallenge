import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/* <RootStackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default RootNavigation;
