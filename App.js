import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './src/navigation/TabNavigator';
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';

// navigation and router
import {NativeRouter} from 'react-router-native';

// store
import {StoreContext} from 'redux-react-hook';
import {Provider} from 'react-redux';
import {store} from './src/store';

const fontConfig = {
  default: {
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'bold',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'medium',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#6C63FF',
    accent: '#656D8A',
    placeholder: '#656D8A',
    text: '#E7EDFF',
    disabled: '#656D8A',
  },
  roundnes: 10,
};

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <NativeRouter>
              <HomeTabNavigator />
            </NativeRouter>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </StoreContext.Provider>
  );
};
export default App;
