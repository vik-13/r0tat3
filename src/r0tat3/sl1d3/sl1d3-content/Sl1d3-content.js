import React, { Component } from 'react';
import './Sl1d3-content.css';

class SlideContent extends Component {
    render() {
        return (
            <div className="item">
                <div className="price-col">
                    <div className="price head-1"></div>
                    <div className="price head-2"></div>
                    <div className="price body-1">
                        <span>viscose sweater</span>
                        <b>29.90$</b>
                    </div>
                    <div className="price body-2">
                        <span>embossed white plimsoll</span>
                        <b>129.90$</b>
                    </div>
                    <div className="price legs-1">
                        <span>Striped shorts</span>
                        <b>29.90$</b>
                    </div>
                    <div className="price legs-2">&nbsp;</div>
                    <div className="price shoes">
                        <span>embossed white plimsoll</span>
                        <b>29.90$</b>
                    </div>
                </div>
                <img className="bg-img" src="images/1_0.png" alt="" />
            </div>
        );
    }
}

export default SlideContent;