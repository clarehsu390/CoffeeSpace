import React from 'react';
import Results from './results';
import { Link } from 'react-router-dom';
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            render: false
        };
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
           console.log(places);
           let markers = [];
           markers.forEach((marker) => {
               marker.setMap(null);
           });

           let bounds = new google.maps.LatLngBounds();
        
           places.forEach((place) => {
               this.state.places.push(place);
               let icon = {
                   url: place.icon,
                   size: new google.maps.Size(71, 71),
                   origin: new google.maps.Point(0, 0),
                   anchor: new google.maps.Point(17, 34),
                   scaledSize: new google.maps.Size(25, 25)
                 };

                 this.setState({
                     render: true
                 });
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
    if (this.state.render) {

        return (
            <div className="search">
                <div>
                <input type="text" id="search" placeholder="Search"/>
                </div>
                <div className="results">
                    <h4>Results</h4>
                    <ul id="list-results">
                        {this.state.places.map((result, i) => {
                        return(
                            <ul key={i} id="list-item">
                            <Link to={`/${result.id}`}><li>{result.name}</li></Link>
                            <div id="details">
                            <li>Price Level: {result.price_level}</li>
                            <li id="rating">Rating: {result.rating}</li>
                            </div>
                            </ul>
                            
                        );
                        })}
                    </ul>
                </div>
            </div>
           );
    } else {
        return (
            <input type="text" id="search" placeholder="Search"/>
        );
    }
   }
}