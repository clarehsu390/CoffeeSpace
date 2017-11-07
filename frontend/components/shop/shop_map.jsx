import React from 'react';

export default class ShopMap extends React.Component {
    constructor(props) {
        super(props);
        this.createMarker = this.createMarker.bind(this);
        this.callback = this.callback.bind(this);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435},
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        let request = {
            location: { lat: 37.7758, lng: -122.435},
            radius: '500',
            query: 'coffee'
        };

        let service = new google.maps.places.PlacesService(this.map);
        service.textSearch(request, this.callback);
    }

    callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                let place = results[i];
                this.createMarker(place);
            }
        }
    }

    createMarker(places) {
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };
        
            var marker = new google.maps.Marker({
              map: map,
              icon: image,
              title: place.name,
              position: place.geometry.location
            });
        }
    }



    render() {
        return(
            <div id="map-container" ref={ map => this.mapNode = map }></div>
        );
    }
}