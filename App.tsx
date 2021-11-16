import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/navigator/app';
import {Provider} from 'react-redux';
import {store, persistor} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar, View} from 'react-native';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            backgroundColor={'#E1E4EC'}
            animated={true}
            barStyle={'light-content'}
          />
          <AppNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
