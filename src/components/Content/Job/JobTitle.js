import React, { Component } from 'react';
import '../../Templates/Template1/Template1.css';

let jobTitle = 'desenvolvedora frot-end'
class JobTitle extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            title: {
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
    
    handleTitleChange = e => {
        jobTitle = e.target.value
    }

    changeTitleComplete = e => {
        this.setState({
            editing: false
        });
        if(jobTitle.trim() === '') {
            jobTitle = 'desenvolvedora frot-end';
        }
    }
    
    
    render() {
        return (
            <div>
                {(!this.state.editing) && (<h3 onClick={this.changeEditState}> { jobTitle } </h3>)}
                {(this.state.editing) && 
                    (<div>
                        <input type="text" title="title" value={this.state.value} onChange={this.handleTitleChange} placeholder="Profissão"/>
                        <button className="btn" onClick={this.changeTitleComplete}>OK</button>
                    </div>) 
                    }
            </div>
        );
    }
}




export default JobTitle;