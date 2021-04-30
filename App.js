import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {createAppContainer, createStackNavigator} from "react-navigation-stack"

import Search from './pages/search'
import SignIn from './pages/signIn'
import Profile from './pages/profile'
import Home from './pages/home'
import SignUp from './pages/registrationUser'

export default function App() {

  return (
      <View style={styles.container}>
        <Search/>
      </View>
    );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
