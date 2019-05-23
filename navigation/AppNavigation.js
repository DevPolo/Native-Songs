import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'

import { ConnexionView, MainView, SongsView } from '../components'

// Create sub comp of one bottom menu tab
const SongsStack = createStackNavigator({
  Main: {
    // Add tab name in the header
    screen: MainView,
    navigationOptions: () => {
      return {
        headerTitle: 'Bibliothèque'
      }
    }
  },
  Songs: {
    screen: SongsView
  }
})

// Create bottom menu with one page
const AppTabNavigator = createBottomTabNavigator(
  {
    Main: SongsStack
  },
  {
    // Add tab name in the header
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        header: null,
        headerTitle: routeName
      }
    }
  }
)

// Create header for one page
const AppStackNavigator = createStackNavigator({
  AppTabNavigator
})

// All screens
const AppSwitchNavigation = createSwitchNavigator({
  // Login, register,..
  Connexion: ConnexionView,

  // rest of the app with header and bottom nav
  Main: AppStackNavigator
})

export default createAppContainer(AppSwitchNavigation)
