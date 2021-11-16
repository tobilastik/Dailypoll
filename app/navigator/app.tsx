import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {primary} from '../constants/colors';
import Explore from '../screens/explore';
import Favourite from '../screens/favourites';
import Connect from '../screens/connect';

type AppParams = {
  Today: undefined;
  Explore: undefined;
  Favourite: undefined;
  Connect: undefined;
};

const Tab = createBottomTabNavigator<AppParams>();
const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Today':
              iconName = 'ios-sunny';
              break;
            case 'Explore':
              iconName = 'search-circle-outline';
              break;
            case 'Favourite':
              iconName = 'heart-outline';
              break;
            case 'Connect':
              iconName = 'ios-chatbubble-ellipses-outline';
              break;
            default:
              iconName = 'ios-sunny';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Today" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Connect" component={Connect} />
    </Tab.Navigator>
  );
};

export default App;
