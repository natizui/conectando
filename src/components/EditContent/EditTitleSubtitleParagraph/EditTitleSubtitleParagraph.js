import React from 'react';
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/typicons/plus'

import Title from './Title.js'
import Subtitle from './Subtitle.js'
import Paragraph from './Paragraph.js'

const Educations = ({ items }) => (
    <div>
        {
            items.map((item, i) => (
                <div>
                    <Title key={i} id={i} value={item.title}  />
                    <Subtitle key={i} id={i} value={item.subtitle}  />
                    <Paragraph key={i} id={i} value={item.paragraph}  /> 
                </div>
            ))
        }
    </div>
);
  

class EducationContainer extends React.Component {
    inputValueDefault = {
        title: '',
        subtitle: '',
        paragraph: ''
    }

    constructor(props) {
        super(props)
    
        this.state = {
            add: false,
            inputValue: this.inputValueDefault,
            education: [
                {
                    title: 'Ciencias da Coputação',
                    subtitle: 'USP - 2007 a 2010',
                    paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eius ipsam corrupti natus'
                },
                {
                    titulo: 'Mestrado',
                    subtitulo: 'USP - 2011 a 2013',
                    paragrafo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eius ipsam corrupti natus'
                }
            ]
        }
    }

    onClick = () => {
        console.log('clique');
        this.setState({
            add: true
        })
      }

    
    onChangeTitle = (e) => {
        const inputValue = Object.assign({}, this.state.inputValue, { title: e.target.value });
        this.setState({ inputValue: inputValue });
    }
    onChangeSubtitle = (e) => {
        const inputValue = Object.assign({}, this.state.inputValue, { subtitle: e.target.value });
        this.setState({ inputValue: inputValue });
    }
    onChangeParagraph = (e) => {
        const inputValue = Object.assign({}, this.state.inputValue, { paragraph: e.target.value });
        this.setState({ inputValue: inputValue });
    }
  
    handleItemClick = (e) => {
        console.log(e.target.innerHTML);
        const { inputValue, education } = this.state;
        if (inputValue) {
            const nextState = [...education, inputValue];
            this.setState({ education: nextState, inputValue: this.inputValueDefault });
        };
        this.setState({
            add: false
        });
    }
  
    render() {
      const { inputValue } = this.state;
      return (
        <div class="template1__education__content">
            <h2>FORMAÇÃO</h2>
            <Educations items={this.state.education} />
            {(!this.state.add) && (<Icon className="viramaozinha" onClick={this.onClick} icon={plus} />)}
            {(this.state.add) && (
                <div>
                    <input type="text" name="title" value={inputValue.title} placeholder="Curso" onChange={this.onChangeTitle} />
                    <input type="text" name="subtitle" value={inputValue.subtitle} placeholder="Período" onChange={this.onChangeSubtitle} />
                    <textarea name="paragraph," value={inputValue.paragraph} placeholder="Breve descrição sobre o curso" onChange={this.onChangeParagraph} />
                    <button className="btn" onClick={this.handleItemClick}>OK</button>
                    
                </div>)
            }
        </div>
      );
    }
}

export default EducationContainer;




