// In App.js in a new project
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import SettingsScreen from './Components/SettingsScreen';
import MapScreen from './Components/MapScreen';

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Settings: { screen: SettingsScreen },
});