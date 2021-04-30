import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './Navigation/Navigation'

import Search from './pages/search'
import SignIn from './pages/signIn'
import Profile from './pages/profile'
import Home from './pages/home'
import SignUp from './pages/registrationUser'
import { render } from 'react-dom';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
