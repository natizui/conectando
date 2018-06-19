import React from 'react';

import '../../../Template1.css';


const ListItem = ({ value, onClick }) => (
    <li onClick={onClick}>{value}</li>
);
  
const List = ({ items, onItemClick }) => (
    <ul>
        {
        items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
        }
    </ul>
);
  
class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: '',
        skills: ['HTML', 'CSS', 'JavaScript']
        };
    }
  
    onClick = () => {
      const { inputValue, skills } = this.state;
      if (inputValue) {
        const nextState = [...skills, inputValue];
        this.setState({ skills: nextState, inputValue: '' });
      }
    }
  
    onChange = (e) => this.setState({ inputValue: e.target.value });
  
    handleItemClick = (e) => {console.log(e.target.innerHTML)}
  
    render() {
      const { skills, inputValue } = this.state;
      return (
        <div class="template1__skills">
            <div class="template1__skills__content">
                <h2>HABILIDADES</h2>
                <input type="text" value={inputValue} onChange={this.onChange} />
                <button className="btn" onClick={this.onClick}>OK</button>
                <List items={skills} onItemClick={this.handleItemClick} />
            </div>
        </div>
      );
    }
  }


export default Skills;