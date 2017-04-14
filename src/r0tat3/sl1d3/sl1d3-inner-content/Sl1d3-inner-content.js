import React, { Component } from 'react';

class SlideInnerContent extends Component {
    render() {
        return (
            <div className="sub-item">
                <img className="img" src={this.props.data.photo} alt="" />
                <div className="price">
                    <span>viscose<br/>sweater</span>
                    <b>29.90$</b>
                </div>
                <img className="gr" src="qr.png" alt="" />
                <div className="description">
                    Color: White <br/>
                    Size: S / M / L / XL  <br/>
                    Composition: 50% polyester, 47% visconse, 3% elastan
                </div>
            </div>
        );
    }
}

export default SlideInnerContent;