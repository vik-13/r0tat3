import React, { Component } from 'react';
import './Sl1d3-content.css';

class SlideContent extends Component {
    products = [];

    constructor(props) {
        super(props);

        console.log(props.data);

        if (props.data.products) {
            for(let i = 0; i < props.data.products.length; i++) {
                this.products.push(
                    <div className="product-item" key={i}>
                        <div className="title">{props.data.products[i].title}</div>
                        <div className="price">{props.data.products[i].price}</div>
                    </div>
                );
            }
        }
    }

    render() {
        return (
            <div className="item">
                <div className="child-products">
                    {this.products}
                </div>
                <img className="bg-img" src="images/1_0.png" alt="" />
            </div>
        );
    }
}

export default SlideContent;