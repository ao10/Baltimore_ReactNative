// In App.js in a new project

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
import { Constants } from 'expo';
// import createBottomTabNavigator from './Components/createBottomTabNavigator';
// import { createStackNavigator, BottomTabBar } from 'react-navigation';
import { createBottomTabNavigator, SafeAreaView } from 'react-navigation';

class Home extends React.Component {
  render(){
      return(
          <View style={styles.container}>              
              <Text> This is the HomeScreen Component.</Text>
          </View>
      )
  }
}

class Settings extends React.Component {
  render(){
      return(
          <View style={styles.container}>
              <Text> This is the SettingsScreen Component.</Text>
          </View>
      )
  }
}

class Map extends React.Component {
  render(){
    const coordinates = {
      latitude: 39.2904,
      longitude: -76.6122,
    }
    return(
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          // Coordinates for Baltimore
          // 39.2904° N, 76.6122° W
          latitude: 39.2904,
          longitude: -76.6122,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
       <Marker coordinate={coordinates} title="This is a test marker" description="I am a marker in Baltimore City!"/>
      </MapView>
    )
  }
}

// export default createBottomTabNavigator;

export default createBottomTabNavigator({
  Home: Home,
  Map: Map,
  Settings: Settings,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
  },
});