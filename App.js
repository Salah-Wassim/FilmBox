import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  let url = `https://theaudiodb.p.rapidapi.com/searchtrack.php?s=${artist}&t=${nom}`;
  fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "4368517609msh05c2125145348ddp123c63jsn54d49d6190df",
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
    }
  }).then(response => 
    response.json().then(data => {
    console.log(data);
    //console.log(data.track[0].strAlbum);
    const json = data.track[0];
    document.querySelector('#music-response').innerHTML = 
    [	
      json.strAlbum, 
      json.strDescriptionEN,
      json.strGenre, 
      json.strMood , 
      json.strMusicVidCompany
    ];
  }));

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
