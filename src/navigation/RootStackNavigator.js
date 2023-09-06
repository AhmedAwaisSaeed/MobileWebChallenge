import React from 'react';
import {ProjectDetail} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createNativeStackNavigator();
const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerShown: false,
        detachPreviousScreen: true,
      }}>
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
