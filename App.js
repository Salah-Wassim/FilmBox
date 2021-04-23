import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Search from './pages/search'
import SignIn from './pages/signIn'
import Profile from './pages/profile'

export default function App() {

  return (
      <View style={styles.container}>
        <Profile/>
      </View>
    );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
