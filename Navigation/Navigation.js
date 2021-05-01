import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from '@react-navigation/stack'

import Search from '../pages/search'
import ficheFilm from '../components/ficheFilm'

const SearchStackNavigator = createStackNavigator({
    search:{
        screen: search,
        navigationOptions: {
            title: 'Search'
        }
    },
    ficheFilm: {
        screen: ficheFilm
    }
})

export default createAppContainer(SearchStackNavigator)