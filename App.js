import React from 'react';
import { StyleSheet, View } from 'react-native';

import Search from './pages/search'

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
