import React, { Component } from 'react';
import { Marker } from 'react-native-maps';

class MarkerList extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers: []
        }
    }
    render(){
        const coordinates = {
            latitude: 39.2904,
            longitude: -76.6122,
        }
        return(
            <Marker coordinate={coordinates} title="Test" description="This is a test" />
            //   <Marker coordinate={building.coordinates} title={item.buildingaddress} description={neighborhood}/>
        )
    }
}

export default MarkerList;