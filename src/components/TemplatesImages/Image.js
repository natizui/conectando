import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: props.id,
            value: props.value
        }

        this.imageClick = this.imageClick.bind(this)
    }

    imageClick() {
        this.props.history.push(this.props.value.path)
    }  

    render() {
        return (
            <div onClick={this.imageClick}>
                <img className="templates__images" src={this.state.value.src} alt={this.state.value.alt} />
            </div>
        )}
}

export default Image

