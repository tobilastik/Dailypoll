import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/navigator/app';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {StatusBar, View} from 'react-native';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
          backgroundColor={'#E1E4EC'}
          animated={true}
          barStyle={'light-content'}
        />
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
