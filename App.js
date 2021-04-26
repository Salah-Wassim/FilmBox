import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Search from './pages/search'
import SignIn from './pages/signIn'
import Profile from './pages/profile'
import Home from './pages/home'
import SignUp from './pages/registrationUser'

export default function App() {

  const [idPage, setIdPage] = useState('1');

  return (
      <View style={styles.container}>
        <SignUp/>
      </View>
    );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
