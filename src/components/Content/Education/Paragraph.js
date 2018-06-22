import React from 'react';


import '../../Templates/Template1/Template1.css';

class Paragraph  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        editing: false,
        id: props.id,
        value: props.value
    }
  }

  onClick = () => {
    this.setState({
      editing: true,
      backup: this.state.value
    });
    }

  onChange = (e) => this.setState({ value: e.target.value });
  
    handleItemClick = (e) => {
      if(this.state.value.trim() === '') {
        this.setState({value: this.state.backup})
      }
        this.setState({
            editing: false
        });
    }


  render() {
    return (
      <div>
        {(!this.state.editing) && (<p className="viramaozinha" onClick={this.onClick}> {this.state.value} </p>)}
        {(this.state.editing) && 
          (<div>
              <input type="text" value={this.state.value} onChange={this.onChange} placeholder="Curso"/>
              <button className="btn" onClick={this.handleItemClick}>OK</button>
          </div>) 
        }
      </div>
    );
}




  
}

export default Paragraph;