import React from 'react'
import {StyleSheet, View, ActivityIndicator, ScrollView} from 'react-native'
import { getFilmDetailFromApi } from '../api/Api'

export default class ficheFilm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        console.log('FilmDetail monté')
        getFilmDetailFromApi(this.props.route.params.id).then(data => {
            this.state = {
                film: data,
                isLoading: false
            }
        })
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    _displayFilm() {
        if(this.state.film != undefined){
            console.log('test')
            return(
                <View style={styles.scrollview_container}>
                    <Text>Bonjour</Text>
                </View>
            )
        }
    }

    render(){
        //console.log(this.props.route.params.id)
        console.log('FilmDetail rendu')
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayFilm()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
     },
     scrollview_container: {
         flex: 1,
     }
})