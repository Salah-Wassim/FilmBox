import React from 'react'
import {Image, StyleSheet, View} from 'react-native'

import FilmItem from '../components/FilmItem'
import { getImageFromApi } from '../api/Api'

export default class ficheFilm extends React.Component {
    render(){
        const film = this.props.film
        return (
            <View>
                <Image
                    style={styles.image_fiche}
                    source = {{uri: getImageFromApi(film.backdrop_path)}}
                />
                <Text style={styles.titre_fiche}>{film}</Text>
                <View style={styles}>
                    <View style={styles}>

                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})