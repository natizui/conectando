import React, { Component } from 'react';
import '../../Templates/Template1/Template1.css';


class Profile extends Component {
    inputValueDefault = ''

    constructor(props) {
        super(props)
        
        this.state = {
            editing: false,
            inputValue: this.inputValueDefault,
            profile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet debitis incidunt quae aliquid voluptates tenetur enim quia, laboriosam aperiam voluptatum molestias saepe minus cupiditate reiciendis sint nulla suscipit esse!',
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






// import React, { Component } from 'react';
// import '../../../Template1.css';


// class Profile extends Component {
//     render() {
//         return (
//             <div className="template1__profile">
//                 <div className="template1__profile__content">
//                     <h2>PERFIL</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet debitis incidunt quae aliquid voluptates tenetur enim quia, laboriosam aperiam voluptatum molestias saepe minus cupiditate reiciendis sint nulla suscipit esse!</p>
//                 </div>
//             </div>
//         );
//     }
// }



export default Profile;