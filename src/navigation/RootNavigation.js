import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const RootNavigation = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default RootNavigation;
