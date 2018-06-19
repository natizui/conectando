import React from 'react';

import '../../../Template1.css';



// deleteItem = () => {
    
// }

const ListItem = ({ value, onClick }) => (
    <li className="viramaozinha" > <p>{value}</p> <button>x</button> </li>
);
  
const List = ({ items, onItemClick }) => (
    <ul onClick={this.onClick}>
        {
        items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
        }
    </ul>
);
  

class Skills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            inputValue: '',
            skills: ['HTML', 'CSS', 'JavaScript']
        }
    }

    onClick = () => {
        console.log('clique');
        this.setState({
            editing: true
        })
    }
  
    onChange = (e) => this.setState({ inputValue: e.target.value });
  
    handleItemClick = (e) => {
        console.log(e.target.innerHTML);
        const { inputValue, skills } = this.state;
        if (inputValue) {
            const nextState = [...skills, inputValue];
            this.setState({ skills: nextState, inputValue: '' });
        };
        this.setState({
            editing: false
        });
    }
  
    render() {
      const { skills, inputValue } = this.state;
      return (
        <div class="template1__skills">
            <div class="template1__skills__content">
                <h2>HABILIDADES</h2>
                <ul>
                    {(!this.state.editing) && (<List items={skills} />)}
                    {(this.state.editing) && 
                        (<div>
                            <input type="text" value={inputValue} onChange={this.onChange} placeholder="Habilidade "/>
                            <button className="btn" onClick={this.handleItemClick}>OK</button>
                        </div>) 
                    }
                    
                </ul>
            </div>
        </div>
      );
    }
  }


export default Skills;