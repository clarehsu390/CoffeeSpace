import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.places !== this.nextProps.places) {
    //         this.props.places = this.nextProps.places;
    //     }
    // }

    render() {

            return(
                
            <div className="results">
                <ul>
                    {this.props.places.map((result, i) => {
                    return(
                        <li key={i}>{result.name}</li>
                    );
                    })}
                </ul>
            </div>
            );
        
    }
}