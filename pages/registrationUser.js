import React from 'react'
import {
    StyleSheet, 
    View, 
    AppRegistry, 
    TextInput, 
    Alert, 
    Button, 
    Text
} from 'react-native'

export default class registrationUser extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: '',
        }
    }

    render(){
        return(
            <View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

})