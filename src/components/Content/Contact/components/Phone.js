import React, { Component } from 'react';
import '../../../Templates/Template1/Template1.css';
import '../../../btn.css';

import InputMask from 'react-input-mask';

let phone = '(99) 999-999-999'
class Phone extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            phoneNumber: {
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
        phone = e.target.value
    }

    changeNameComplete = e => {
        this.setState({
            editing: false
        });
        if(phone.trim() === '') {
            phone = '(99) 999-999-999'
        }
    }
    
    
    render() {
        return (
            <div className="viramaozinha">
                {(!this.state.editing) && (<p onClick={this.changeEditState}> { phone } </p>)}
                {(this.state.editing) && 
                    (<div>
                        <InputMask mask="(99) 999-999-999" type="tel" name="phoneNumber"  value={this.state.value} onChange={this.handleNameChange} placeholder="(99) 999-999-999"/>
                        <button className="btn" onClick={this.changeNameComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}



export default Phone;