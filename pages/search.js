import React from 'react'
import Styles from '../Styles'
import FilmItem from '../components/FilmItem'
import { FlatList, StyleSheet, TextInput, View, Button } from 'react-native'

import { getFilmsFromApiWWithSearchedText } from '../api/Api'

export default class Search extends React.Component{
   constructor(props){
      super(props)
      this.state = { films: [] }
      this.searchedText = "" 
   }

   _loadFilms() {
      if (this.searchedText > 0) {
         getFilmsFromApiWWithSearchedText(this.searchedText).then(data => {
            console.log(data)
            this.setState({ films: data.results })
         })
      }
   }

   _searchedTextInputChanged(text){
      this.searchedText = text
   }

   render(){
      return(
         <View>
               <TextInput placeholder="Titre du film"
                  onChangeText = {(text) => this._searchedTextInputChanged(text)}
               />
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