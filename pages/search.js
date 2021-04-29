import React from 'react'
import FilmItem from '../components/FilmItem'
import { FlatList, StyleSheet, TextInput, View, Button, ActivityIndicator } from 'react-native'

import { getFilmsFromApiWWithSearchedText } from '../api/Api'

export default class Search extends React.Component{
   constructor(props){
      super(props)
      this.searchedText = ""
      this.page = 0 // Compteur pour connaitre la page courante
      this.totalPages = 0 //Nombre de pages totales pour savoir si on a atteint la fin 
      this.state = { 
         films: [],
         isLoading: false, 
      }
   }

   _loadFilms() {
      if (this.searchedText.length > 0) {
         this.setState({isLoading: true}) // Lancement du chargement
         getFilmsFromApiWWithSearchedText(this.searchedText, this.page+1).then(data => {
            this.page = data.page
            this.totalPages = data.total_pages
            this.setState({
               films: [ ...this.state.films, ...data.results ],
               isLoading: false
            })
            //this.setState({isLoading: false}) // Fin du chargement
            //this.setState({ films: data.results })
         })
      }
   }

   _searchFilms(){
      this._loadFilms() // Remettre à zéro les films du state
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
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                     if(this.page < this.totalPages){
                        this._loadFilms()
                     }
                  }}
               />
               {this._displayLoading()}
         </View>
      )
   }
}

// Quand je clique sur le film il faut que je récupèle l' id du film pour ensuite récupérer
//les info correspondantes => https://developers.themoviedb.org/3/movies/get-movie-details

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
