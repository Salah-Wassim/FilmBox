import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
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
