import React, { Component } from 'react';
import '../../../../Template1.css';
import '../../../../../btn.css';

let adress = 'github.com/janedoe'
class Github extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            githubAdress: {
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
                        <input type="" name="githubAdress" value={this.state.value} onChange={this.handleNameChange} placeholder="Nome Completo"/>
                        <button className="btn" onClick={this.changeNameComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}



export default Github;