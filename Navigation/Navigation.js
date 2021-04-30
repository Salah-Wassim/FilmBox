import {createStackNavigator} from 'react-navigation-stack'
import {createStackNavigator, createAppContainer} from "react-navigation-stack"
import {StyleSheet, View} from 'react-native'

import Search from '../pages/search'

const SearchStackNavigator = createStackNavigator({
    Search:{
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    }
})

export default createAppContainer(SearchStackNavigator)