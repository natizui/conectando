import React from 'react'
import './AllTemplates.css'

import TemplatesImages from '../../components/TemplatesImages/TemplatesImages.js'

function AllTemplates(props) {
    return (
        <div className="all-templates">
            <h1>MODELOS DISPONÍVEIS</h1>
            <p className="">Escolha um dos modelos abaixo e comece a montar seu currículo agora mesmo</p>
            <TemplatesImages history={props.history} />
        </div>
    )
}

export default AllTemplates