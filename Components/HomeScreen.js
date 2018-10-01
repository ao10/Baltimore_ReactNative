import React, { Component } from 'react';

import { View, Button, StyleSheet, FlatList, Text } from 'react-native';
import { Constants } from 'expo';

class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        dataSource: []
      }
      this.fetchData = this.fetchData.bind(this);
      this.navigateToMap = this.navigateToMap.bind(this);
    }
  
    fetchData(){
      alert("Button was pressed.");
      fetch("https://data.baltimorecity.gov/resource/rw5h-nvv4.json")
        .then(response => response.json())
        .then(responseJSON => {
        //   console.log(responseJSON);
          this.setState({dataSource: responseJSON}, function() {});
        }).catch((error) => {
          console.error(error);
        });
    }

    navigateToMap(){
        this.props.navigation.navigate('Map', {
            markers: this.state.dataSource
        });
    }

    componentDidMount(){
        fetch("https://data.baltimorecity.gov/resource/rw5h-nvv4.json")
        .then(response => response.json())
        .then(responseJSON => {
        //   console.log(responseJSON);
          this.setState({dataSource: responseJSON}, function() {});
        }).catch((error) =>{
          console.error(error);
        });
    }
  
    render(){
        return(
            <View style={styles.container}>          
                <Text> This is the HomeScreen Component.</Text>
                <Button title="Click me" onPress={this.navigateToMap}></Button>
                { this.state.dataSource != null && <FlatList
            data={this.state.dataSource}
            renderItem= {
              ({item, index}) => <Text key={index}>{item.buildingaddress}</Text>
            }
            initialNumToRender={5}
            keyExtractor={({id}, index) => id}
          />}
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


export default HomeScreen;