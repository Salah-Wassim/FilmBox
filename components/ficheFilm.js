import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default class ficheFilm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
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
                {this._displayLoading}
                {this.props.route.params.id}
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
        top:100,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
     }
})