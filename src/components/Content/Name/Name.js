import React, { Component } from 'react';
import '../../Templates/Template1/Template1.css';

let fullName = 'Jane Doe'
class Name extends Component {
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
        console.log(fullName)
        this.setState({
            editing: false
        });
        if(fullName.trim() === '') {
            fullName = 'Jane Doe'
        }
    }
    
    
    render() {
        return (
            <div>
                {(!this.state.editing) && (<h1 className="viramaozinha" onClick={this.changeEditState}> { fullName } </h1>)}
                {(this.state.editing) && 
                    (<div>
                        <input type="text" name="name" maxLength="23" value={this.state.value} onChange={this.handleNameChange} placeholder="Nome Completo"/>
                        <button className="btn" onClick={this.changeNameComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}



export default Name;