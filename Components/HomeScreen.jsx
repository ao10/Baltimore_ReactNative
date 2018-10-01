import React from 'react';

import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render(){
        return(
            <View>
                <Text> This is the HomeScreen Component.</Text>
            </View>
        )
    }
}

export default HomeScreen;