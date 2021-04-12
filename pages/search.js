import React from 'react'
import Styles from '../Styles'
import FilmItem from '../components/FilmItem'
import { FlatList, StyleSheet, TextInput, View, Button, ActivityIndicator } from 'react-native'

import { getFilmsFromApiWWithSearchedText } from '../api/Api'

export default class Search extends React.Component{
   constructor(props){
      super(props)
      this.searchedText = "" 
      this.state = { 
         films: [],
         isLoading: false, 
      }
   }

   _loadFilms() {
      if (this.searchedText.length > 0) {
         this.setState({isLoading: true}) // Lancement du chargement
         getFilmsFromApiWWithSearchedText(this.searchedText).then(data => {
            console.log(data)
            this.setState({isLoading: false}) // Fin du chargement
            this.setState({ films: data.results })
         })
      }
   }

   _searchedTextInputChanged(text){
      this.searchedText = text
   }

   _displayLoading() {
      if(this.state.isLoading) {
         return(
            <View style={styles.loading_container}>
               <ActivityIndicator size="large"/>
            </View>
         )
      }
   }

   render(){
      return(
         <View>
               <TextInput placeholder="Titre du film"
                  onChangeText = {(text) => this._searchedTextInputChanged(text)}
                  onSubmitEditing = {() => this._loadFilms()}
               />
               <Button title="rechercher" onPress={() => this._loadFilms()}/>
               <FlatList
                  data={this.state.films}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <FilmItem film={item}/>}
               />
               {this._displayLoading()}
         </View>
      )
   }
}

const styles = StyleSheet.create({
   loading_container: {
      position:'absolute',
      left:0,
      right:0,
      top:100,
      bottom:0,
      alignItems:'center',
      justifyContent:'center'
   }
})