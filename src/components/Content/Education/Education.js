import React from 'react';
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/typicons/plus'
// import {trash} from 'react-icons-kit/typicons/trash'

import Title from './Title.js'
import Subtitle from './Subtitle.js'
import Paragraph from './Paragraph.js'

import './Education.css';




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
  

class Education extends React.Component {
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

export default Education;









// let course = 'analise e desenvolvimento de sistemas';
// let period = '2007 - 2011';
// let description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eius ipsam corrupti natus';

// class Education extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             id: this.props.id ? this.props.id : null,
//             courseInput: this.props.courseInput ||  '',
//             periodInput: this.props.periodInput || '',
//             descriptionInput: this.props.descriptionInput || '',
//             editing: this.props.editing || false
//         }
//     }
    
//     handleCampoChange = e => {
//         const nomeDoCampo = e.target.name
//         const valorDoCampo = e.target.value

//         this.setState({
//             [nomeDoCampo]: valorDoCampo
//         })
//     }

//     handleFormularioSubmit = e => {
//         e.preventDefault()
        
//         if (this.state.id) {
//             const educationInfo = {
//                 id: this.state.id,
//                 courseInput: this.state.courseInput,
//                 periodInput: this.state.periodInput,
//                 descriptionInput: this.state.descriptionInput,
//             } 

//             this.props.onEditaClick(educationInfo)

//             this.setState({
//                 editing: false
//             })
//         } else {
//             const educationInfo = {
//                 courseInput: this.state.courseInput,
//                 periodInput: this.state.periodInput,
//                 descriptionInput: this.state.descriptionInput,
//             } 

//             this.props.onAdicionaClick(educationInfo)

//             this.setState({
//                 courseInput: '',
//                 periodInput: '',
//                 descriptionInput: ''
//             })
//         }
//     }

//     handleFormularioClick = e => {
//         this.setState({
//             editing: true
//         })
//     }

//     handleBotaoRemoverClick = e => {
//         e.stopPropagation()

//         const id = this.state.id;

//         this.props.onRemoveClick(id)

//         this.setState({
//             editing: false
//         })
//     }

//     render() {
//         return (
//             <div class="template1__education">
//               <div class="template1__education__content">
//                     <h2>FORMAÇÃO</h2>
//                     {(!this.state.id || this.state.editing) && (
//                         <form 
//                             className="education__info" 
//                             onClick={this.handleFormularioClick}
//                             onSubmit={this.handleFormularioSubmit}
//                         >

//                         <input 
//                             className="education__info__course-input" 
//                             type="text"
//                             name="courseInput"
//                             value={this.state.courseInput}
//                             placeholder="Curso"
//                             autocomplete="off"
//                             area-label="Curso"
//                             onChange={this.handleCampoChange}
//                         />
//                         <input 
//                             className="education__info__period-input" 
//                             type="text"
//                             name="periodInput"
//                             value={this.state.periodInput}
//                             placeholder="Período"
//                             autocomplete="off"
//                             area-label="Período"
//                             onChange={this.handleCampoChange}
//                         />
//                         <textarea 
//                             className="education_info__description-input"
//                             name="descriptionInput,"
//                             value={this.state.descriptionInput}
//                             placeholder="Breve descrição sobre o curso"
//                             area-label="Descrição"
//                             autocomplete="off"
//                             onChange={this.handleCampoChange}
//                         />
//                         <button className="educationInfo__botao-concluir">
//                             Concluído
//                         </button>
//                         {/* <button 
//                             className="education__info__remove-btn"
//                             type="button"
//                             onClick={this.handleBotaoRemoverClick}
//                         >
//                             <Icon icon={trash} />
//                         </button> */}
                        
//                     </form>
//                     )}
                            
//                     {(this.state.id && !this.state.editing) && (
//                         <div>
//                             <h4 className="viramaozinha" onClick={this.changeEditState}> { course } </h4>
//                             <h5 className="viramaozinha" onClick={this.changeEditState}> { period } </h5>
//                             <p className="viramaozinha" onClick={this.changeEditState}> { description } </p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         )
//     }
// }

