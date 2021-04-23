import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Search from './pages/search'
import SignIn from './pages/signIn'
import Profile from './pages/profile'
import Home from './pages/home'

export default function App() {

  return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
