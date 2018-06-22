import React, { Component } from 'react';
import './Profile.css';


class Profile extends Component {
    inputValueDefault = ''

    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            inputValue: this.inputValueDefault,
            profile: 'Bacharel em Ciencias da Computação com mestrado em Bioinformática, experiência em pesquisa, abrangendo áreas como estudo do genoma, metagenomas, transcritoma e proteoma.',
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
            this.setState( { profile: this.state.inputValue })
        }
    }
    
    
    render() {
        return (
                <div className="template1__profile__content">
                    <h2>PERFIL</h2>
                    {(!this.state.editing) && (<p onClick={this.changeEditState}> { this.state.profile } </p>)}
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


export default Profile;