import React, { Component } from 'react';
import Metronome from './metronome';

class Metronomes extends Component {
    render() { 
        return ( 
            <div>

            <select name="sounds" ref = {(input)=> this.menu = input}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button 
            onClick = {() => this.props.onAdd(this.menu.value)}
            className={"button btn btn-primary btn-sm m-2"}>Add Metronome</button>

                {this.props.metronomes.map(metronome => (
                    <Metronome key = {metronome.id} link = {metronome.link}/>))}
            </div>
         );
    }
}
 
export default Metronomes;