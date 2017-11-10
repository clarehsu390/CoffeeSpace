import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

   componentDidMount() {
       let input = document.getElementById('search');
        this.search = new google.maps.places.SearchBox(input);
        
   }

   componentDidUpdate() {
    this.props.map.addListener('bounds_changed', () => {
        this.search.setBounds(this.props.map.getBounds());        
    });
       this.search.addListener('places_changed', () => {
           let places = this.search.getPlaces();
           let markers = [];
           markers.forEach((marker) => {
               marker.setMap(null);
           });

           let bounds = new google.maps.LatLngBounds();
        
           places.forEach((place) => {
               console.log(place);
               let icon = {
                   url: place.icon,
                   size: new google.maps.Size(71, 71),
                   origin: new google.maps.Point(0, 0),
                   anchor: new google.maps.Point(17, 34),
                   scaledSize: new google.maps.Size(25, 25)
                 };

           markers.push(new google.maps.Marker({
               map: this.props.map,
               icon: icon,
               title: place.name,
               position: place.geometry.location
           }));

           if (place.geometry.viewport) {
               bounds.union(place.geometry.viewport);
           } else {
               bounds.extend(place.geometry.location);
           }
       });
       this.props.map.fitBounds(bounds);
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