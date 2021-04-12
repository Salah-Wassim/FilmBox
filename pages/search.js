import React from 'react'
import Styles from '../Styles'
import FilmItem from '../components/FilmItem'
import { FlatList, StyleSheet, TextInput, View, Button } from 'react-native'

import { getFilmsFromApiWWithSearchedText } from '../api/Api'

export default class Search extends React.Component{
   constructor(props){
      super(props)
      this.state = { films: [] }
   }

   _loadFilms() {
      getFilmsFromApiWWithSearchedText("it").then(data => {
         console.log(data)
         this.setState({ films: data.results })
      })
   }

   render(){
      return(
         <View>
               <TextInput placeholder="Titre du film"/>
               <Button title="rechercher" onPress={() => this._loadFilms()}/>
               <FlatList
                  data={this.state.films}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <FilmItem film={item}/>}
               />
         </View>
      )
   }
}

const styles = StyleSheet.create({
 
})