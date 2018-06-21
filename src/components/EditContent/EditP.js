import React, { Component } from 'react';


class EditP extends Component {
    inputValueDefault = ''

    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            inputValue: this.inputValueDefault,
            value: props.value,
            error: ''
        }
    }
    
    
    changeEditState = e => {
        this.setState({
            editing: true
        })
    }
    
    onChange = (e) => this.setState({ inputValue: e.target.value });


    changeNameComplete = e => {
        this.setState({
            editing: false
        });
        if(!(this.state.inputValue.trim() === '')) {
            this.setState( { value: this.state.inputValue })
        }
    }
    
    
    render() {
        return (
                <div>
                    {(!this.state.editing) && (<p onClick={this.changeEditState}> { this.state.value } </p>)}
                    {(this.state.editing) && 
                        (<div>  
                            <textarea type="text" value={this.state.inputValue} onChange={this.onChange} placeholder="Seu resumo"/>
                            <button className="btn" onClick={this.changeNameComplete}>OK</button>
                        </div>) 
                    }
                </div>
        );
    }
}


export default EditP;