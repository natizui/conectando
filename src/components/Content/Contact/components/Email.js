import React, { Component } from 'react';
import '../../../Templates/Template1/Template1.css';
import '../../../btn.css';

let email = 'janedoe@email.com.br'
class Email extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            emailAdress: {
                value: this.props.value,
                error: ''
            },
        }
    }
    
    
    changeEditState = e => {
        this.setState({
            editing: true
        });
    }
    
    handleNameChange = e => {
        email = e.target.value
    }

    changeNameComplete = e => {
        this.setState({
            editing: false
        });
        if(email.trim() === '') {
            email = 'Jane Doe'
        }
    }
    
    
    render() {
        return (
            <div className="viramaozinha">
                {(!this.state.editing) && (<p onClick={this.changeEditState}> { email } </p>)}
                {(this.state.editing) && 
                    (<div>
                        <input type="email" name="emailAdress" value={this.state.value} onChange={this.handleNameChange} placeholder="Nome Completo"/>
                        <button className="btn" onClick={this.changeNameComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}



export default Email;