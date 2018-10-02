import React, { Component } from 'react';
import { MapView } from 'expo';
import MarkerList from './MarkerList';
import { Marker } from 'react-native-maps';

class MapScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers: []
        }
    }   
    componentDidMount(){
        const { navigation } = this.props;
        const markers = navigation.getParam('markers', 'Fallback-Value');
        // console.log("Before");
        newArray = []
        markers.map(building => {
            coordinates = {
                latitude: building.location.coordinates[1],
                longitude: building.location.coordinates[0],
            }
            building.location.coordinates = coordinates;
            newArray.push(building);
        })
        this.setState({markers: newArray}, () => {
            // console.log(this.state);
            // console.log("I just printed the state");
        });
    }
    render(){
        if(this.state.markers[0]){
            console.log(this.state.markers[0].location.coordinates);
            console.log("SHIT");
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
        {this.state.markers.map((building, index) => 
            <Marker key={index} coordinate={building.location.coordinates} title={building.buildingaddress} description={building.neighborhood} />
        )}
        {/* <MarkerList markers={this.state.dataSource}/> */}
        {/* <MarkerList /> */}
        </MapView>
      )
    }
}

export default MapScreen;
