import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './pages/search'
import Test from './components/test'
import SignIn from './pages/signIn'
import SignUp from './pages/registrationUser'
import Home from './pages/home'
import Profile from './pages/profile'
import FicheFilm from './components/ficheFilm'


export default function App () {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='FicheFilm' component={FicheFilm}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
