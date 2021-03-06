import React, { Component } from 'react';
import './Sl1d3.css';
import SlideContent from "./sl1d3-content/Sl1d3-content";
import SlideInnerContent from "./sl1d3-inner-content/Sl1d3-inner-content";

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {
                transform: 'translate3D('  +
                    (this.props.data.x * 100 * this.props.density) +
                    '%, 0, ' + (this.props.data.cssClass !== '--center' ? '-200px' : '0') +
                    ') rotateY(' +
                    (this.props.data.cssClass === '--left' ? '45deg' : this.props.data.cssClass === '--right' ? '-45deg' : '0') +
                    ')'
            }
        };
    }

    componentWillReceiveProps() {
        this.setState({
            styles: {
                transform: 'translate3D('  +
                (this.props.data.x * 100 * this.props.density) +
                '%, 0, ' + (this.props.data.cssClass !== '--center' ? '-200px' : '0') +
                ') rotateY(' +
                (this.props.data.cssClass === '--left' ? '45deg' : this.props.data.cssClass === '--right' ? '-45deg' : '0') +
                ')'
            }
        });
    }

    render() {
        let content = (!this.props.inner ?
            <SlideContent data={this.props.data}/> :
            <SlideInnerContent data={this.props.data}/>);
        return (
            <div className={'rotate-item ' + this.props.data.cssClass + (!this.props.data.visible ? ' hidden' : '')}
                 style={this.state.styles}>
                {content}
            </div>
        );
    }
}

export default Slide;
