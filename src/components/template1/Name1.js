import React, { Component } from 'react';
import './template1.css';

let fullName = 'Jane Doe'
class Name1 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            name: {
                value: this.props.value,
                error: ''
            },
        }
    }
    
    
    changeEditState = e => {
        this.setState({
            editing: true
        })
    }
    
    handleNameChange = e => {
        fullName = e.target.value
    }

    changeNameComplete = e => {
        this.setState({
            editing: false
        })
    }
    
    
    render() {
        return (
            <div>
                {(!this.state.editing) && (<h1 onClick={this.changeEditState}> { fullName } </h1>)}
                {(this.state.editing) && 
                    (<div>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleNameChange} placeholder="Nome Completo"/>
                        <button onClick={this.changeNameComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}



export default Name1;