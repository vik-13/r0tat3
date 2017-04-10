import React, { Component } from 'react';
import './Sl1d3-content.css';

class SlideContent extends Component {
    render() {
        return (
            <img src={this.props.data.image} alt="" />
        );
    }
}

export default SlideContent;