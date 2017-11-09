import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

   componentDidMount() {
       let input = document.getElementById('search');
        this.search = new google.maps.places.SearchBox(input);
        this.search.addListener('places_changed', () => {
            let places = this.search.getPlaces();

            if (places.length === 0) {
                return;
            }
            let markers = [];

            markers.forEach((marker) => {
                marker.setMap(null);
            });

            let bounds = new google.maps.LatLngBounds();

            places.forEach((place) => {
                let icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                  };
            });

            markers.push(new google.maps.Marker({
                map: this.props.map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));
        });
   }

   render() {
       return (
           <div>
            <input type="text" id="search" placeholder="Search"/>
        </div>
       );
   }
}