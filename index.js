/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider as PaperProvider, useTheme} from 'react-native-paper';

const Root = () => {
  const theme = useTheme();

  return (
    <PaperProvider
      theme={{
        ...theme,
        colors: {...theme.colors, secondaryContainer: 'transparent'},
      }}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
