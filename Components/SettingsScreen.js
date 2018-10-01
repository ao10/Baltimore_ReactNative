import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';

class SettingsScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> This is the SettingsScreen Component.</Text>
            </View>
        )
    }
}

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


export default SettingsScreen;