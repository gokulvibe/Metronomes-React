import React, { Component } from 'react';
import Metronomes from './components/metronomes';

class App extends Component {
    state = { 
        metronomes: [
            {id:1, link: "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"},
            {id:2, link:"https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"}
        ]
     }

     handleAddMetronome = option => {
         let metronomes = this.state.metronomes;
         console.log("printing:",metronomes)
         const metronomeLength = metronomes.length;
         switch (option){
             case 1: metronomes.push({id: metronomeLength, link:"https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"})
             break;

             case 2: metronomes.push({id: metronomeLength, link:"https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg"})
             break;

             default: metronomes.push({id: metronomeLength, link:"https://actions.google.com/sounds/v1/cartoon/cartoon_cowbell.ogg"})
         }

         console.log("Printing again:", metronomes)
         this.setState({ metronomes });
     }

    render() { 
        return ( 
            <React.Fragment>
                <Metronomes metronomes={this.state.metronomes} onAdd={this.handleAddMetronome}/>
            </React.Fragment>
         );
    }
}
 
export default App;