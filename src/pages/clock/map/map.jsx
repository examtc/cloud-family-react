import React, { Component } from 'react';
import StyleMap from './StyleMap';
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'
import {Map, Marker } from 'react-bmap'

class BaiMap extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <StyleMap>
                <Map  center={{lng: 116.2566393847, lat: 40.12211024706}} zoom="16" style={{ height: '400px',width:"100%",position:"absolute"}}>
                <Marker position={{lng: 116.2566393847, lat: 40.12211024706}} />
                {/* <NavigationControl />  */}
                {/* <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/> */}
            </Map>
            </StyleMap>
        );
    }
    componentDidMount(){
      
        
    }
}
 
export default BaiMap;