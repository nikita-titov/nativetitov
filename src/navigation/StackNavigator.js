import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// pages
import Films from '../screens/Films';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Auth from '../screens/Auth';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#191A25',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name=" " component={Films} />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name=" " component={Favorites} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name=" " component={Profile} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  FavoritesStackNavigator,
  ProfileStackNavigator,
  AuthStackNavigator,
};
