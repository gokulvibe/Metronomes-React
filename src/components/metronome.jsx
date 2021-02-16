import React, { Component } from 'react';

class Metronome extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="col-sm-4 col-sm-offset-4 embed-responsive embed-responsive-4by3">
                <audio controls class="embed-responsive-item">
                    <source src="https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg" type="audio/ogg"></source>
                    Your browser does not support the audio tag.
            </audio>
            </div>
            
         );
    }
}
 
export default Metronome;