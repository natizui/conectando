import React from 'react';
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/typicons/plus'

import ListItem from './ListItem.js'

import '../../../Template1.css';




const List = ({ items }) => (
    <ul>
        {
        items.map((item, i) => <ListItem key={i} id={i} value={item}  />)
        }
    </ul>
);
  

class Skills extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            add: false,
            inputValue: '',
            skills: ['HTML', 'CSS', 'JavaScript']
        }
    }

    onClick = () => {
        console.log('clique');
        this.setState({
            add: true
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
            add: false
        });
    }
  
    render() {
      const { skills, inputValue } = this.state;
      return (
        <div class="template1__skills">
            <div class="template1__skills__content">
                <h2>HABILIDADES</h2>
                <List items={skills} />
                {(!this.state.add) && (<Icon onClick={this.onClick} icon={plus} />)}
                {(this.state.add) && 
                    (<div>
                    <input type="text" value={inputValue} onChange={this.onChange} placeholder="Habilidade "/>
                    <button className="btn" onClick={this.handleItemClick}>OK</button>
                    </div>) 
                }
            </div>
        </div>
      );
    }
  }


export default Skills;