import React from 'react';

import template01 from './template01.png'
import template02 from './template02.png'
import template03 from './template03.png'
import template04 from './template04.jpg'
import Image from './Image.js'

import './TemplatesImages.css'


// const Image = ({ value }) => (
//     <a path={value.path}>
//         <img className="templates__images" src={value.src} alt={value.alt} />
//     </a>
// )

const Images = ({ items, history }) => (
    <div className="templates__container">
        {
        items.map((item, i) => <Image key={i} value={item}  history={history} />)
        }
    </div>
)

class TemplatesImages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                {
                    src: template01,
                    path: '/modelo',
                    alt: 'imagem genérica de modelo de curriculo'
                },
                {
                    src: template02,
                    path: '/modelo',
                    alt: 'imagem genérica de modelo de curriculo'
                },
                {
                    src: template03,
                    path: '/modelo',
                    alt: 'imagem genérica de modelo de curriculo'
                },
                {
                    src: template04,
                    path: '/modelo',
                    alt: 'imagem genérica de modelo de curriculo'
                },
            ]
        }
    }

    render() {
        return (
          <div className="templates">
              <Images items={this.state.images} history={this.props.history} />
          </div>
        );
      }
}

export default TemplatesImages