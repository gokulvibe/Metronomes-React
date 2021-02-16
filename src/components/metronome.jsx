import React, { Component } from 'react';

class Metronome extends Component {
    render() { 
        return ( 
            <div>
            <div className="col-sm-4 col-sm-offset-4 embed-responsive embed-responsive-4by3">
                <audio autoPlay controls loop className="embed-responsive-item">
                    <source src={this.props.link} type="audio/ogg"></source>
                    Your browser does not support the audio tag.
            </audio>
            </div>
            </div>
            
         );
    }
}
 
export default Metronome;