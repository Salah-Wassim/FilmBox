import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class ficheFilm extends React.Component {

    render(){
        return (
            <View style={styles.main_container}>
                <Text>Détail du film</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})