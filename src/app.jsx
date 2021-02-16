import React, { Component } from 'react';
import Metronome from './components/metronome';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Metronome/>
            </React.Fragment>
         );
    }
}
 
export default App;