import React, { Component } from 'react';
import '../../../Templates/Template1/Template1.css';
import '../../../btn.css';

let adress = 'linkedin.com/in/janedoe'
class Linkedin extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            linkedinAdress: {
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
        adress = e.target.value
    }

    changeNameComplete = e => {
        this.setState({
            editing: false
        });
        if(adress.trim() === '') {
            adress = 'Jane Doe'
        }
    }
    
    
    render() {
        return (
            <div className="viramaozinha">
                {(!this.state.editing) && (<p onClick={this.changeEditState}> { adress } </p>)}
                {(this.state.editing) && 
                    (<div>
                        <input type="" name="linkedinAdress" value={this.state.value} onChange={this.handleNameChange} placeholder="Nome Completo"/>
                        <button className="btn" onClick={this.changeNameComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}



export default Linkedin;