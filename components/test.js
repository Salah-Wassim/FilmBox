import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View, Text, Button} from 'react-native'

export default function test({navigation}) {
    return(
        <View>
            <Text>Hello</Text>
            <Button title="go to search" onPress={() => navigation.navigate('Search')}></Button>
        </View>
    )
}