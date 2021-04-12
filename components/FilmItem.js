import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

export default class FilmItem extends React.Component{
    render(){
        const film = this.props.film
        return(
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
    },
    image: {
        width:120,
        haight: 180,
        margin: 5,
        backgroundColor: 'gray',
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#6666'
    },
})