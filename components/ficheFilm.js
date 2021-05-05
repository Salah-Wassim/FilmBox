import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class ficheFilm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: false
        }
    }

    _displayLoading = () => {
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    render(){
        console.log(this.props.route.params.id)
        return (
            <View style={styles.main_container}>
                <Text>Détail du film {this.props.route.params.id}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
})