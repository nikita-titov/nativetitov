import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// stack pages
import {
  MainStackNavigator,
  FavoritesStackNavigator,
  ProfileStackNavigator,
  AuthStackNavigator,
} from './StackNavigator';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFilm, faHeart, faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FE4E27',
        inactiveTintColor: '#E7EDFF',
        tabStyle: {
          paddingTop: 5,
        },
        style: {
          backgroundColor: '#282C3F',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Films"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faFilm} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHeart} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faUserCircle} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        tabBarOptions={{visible: false}}
        name="Auth"
        component={AuthStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faFilm} size={25} color={color} />
          ),
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
