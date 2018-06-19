import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/typicons/trash'

import '../../../Template1.css'



let course = 'analise e desenvolvimento de sistemas';
let period = '2007 - 2011';
let description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium eius ipsam corrupti natus';

class Education extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id ? this.props.id : null,
            courseInput: this.props.courseInput ||  '',
            periodInput: this.props.periodInput || '',
            descriptionInput: this.props.descriptionInput || '',
            editing: this.props.editing || false
        }
    }
    
    handleCampoChange = e => {
        const nomeDoCampo = e.target.name
        const valorDoCampo = e.target.value

        this.setState({
            [nomeDoCampo]: valorDoCampo
        })
    }

    handleFormularioSubmit = e => {
        e.preventDefault()
        
        if (this.state.id) {
            const educationInfo = {
                id: this.state.id,
                courseInput: this.state.courseInput,
                periodInput: this.state.periodInput,
                descriptionInput: this.state.descriptionInput,
            } 

            this.props.onEditaClick(educationInfo)

            this.setState({
                editing: false
            })
        } else {
            const educationInfo = {
                courseInput: this.state.courseInput,
                periodInput: this.state.periodInput,
                descriptionInput: this.state.descriptionInput,
            } 

            this.props.onAdicionaClick(educationInfo)

            this.setState({
                courseInput: '',
                periodInput: '',
                descriptionInput: ''
            })
        }
    }

    handleFormularioClick = e => {
        this.setState({
            editing: true
        })
    }

    handleBotaoRemoverClick = e => {
        e.stopPropagation()

        const id = this.state.id;

        this.props.onRemoveClick(id)

        this.setState({
            editing: false
        })
    }

    render() {
        return (
            <div class="template1__education">
              <div class="template1__education__content">
                    <h2>FORMAÇÃO</h2>
                    {(!this.state.id || this.state.editing) && (
                        <form 
                            className="education__info" 
                            onClick={this.handleFormularioClick}
                            onSubmit={this.handleFormularioSubmit}
                        >

                        <input 
                            className="education__info__course-input" 
                            type="text"
                            name="courseInput"
                            value={this.state.courseInput}
                            placeholder="Curso"
                            autocomplete="off"
                            area-label="Curso"
                            onChange={this.handleCampoChange}
                        />
                        <input 
                            className="education__info__period-input" 
                            type="text"
                            name="periodInput"
                            value={this.state.periodInput}
                            placeholder="Período"
                            autocomplete="off"
                            area-label="Período"
                            onChange={this.handleCampoChange}
                        />
                        <textarea 
                            className="education_info__description-input"
                            name="descriptionInput,"
                            value={this.state.descriptionInput}
                            placeholder="Breve descrição sobre o curso"
                            area-label="Descrição"
                            autocomplete="off"
                            onChange={this.handleCampoChange}
                        />
                        <button className="educationInfo__botao-concluir">
                            Concluído
                        </button>
                        {/* <button 
                            className="education__info__remove-btn"
                            type="button"
                            onClick={this.handleBotaoRemoverClick}
                        >
                            <Icon icon={trash} />
                        </button> */}
                        
                    </form>
                    )}
                            
                    {(this.state.id && !this.state.editing) && (
                        <div>
                            <h4 className="viramaozinha" onClick={this.changeEditState}> { course } </h4>
                            <h5 className="viramaozinha" onClick={this.changeEditState}> { period } </h5>
                            <p className="viramaozinha" onClick={this.changeEditState}> { description } </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Education;