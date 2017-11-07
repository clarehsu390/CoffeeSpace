import React from 'react';

export default class ShopMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435},
            zoom: 13
        };
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.setState({map: new google.maps.Map(document.getElementById('map-container'),
                {
                    center: pos,
                    zoom: 13
                })
            });
            });
        }
    }

    render() {
        return(
            <div id="map-container" ref={ map => this.mapNode = map }></div>
        );
    }
}