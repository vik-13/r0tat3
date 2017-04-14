import React, { Component } from 'react';
import './App.css';
import Rotate from "./r0tat3/R0tat3";

class App extends Component {
    products = [
        {
            key: "-KeKzVstpgSRbsTaUohb",
            title: "T-Shirt",
            price: "$99",
            crossPrice: "$125",
            photo: "288e2e49-3fd5-429e-9ac9-f194e590a7a7.jpeg"
        },
        {
            key: "-KdVww3pl-Rhc5Bl7hjI",
            title: "Sirens",
            price: "$27.90",
            crossPrice: "$34.50",
            photo: "177a52d1-e0bf-40ac-9566-0a446529801c.jpg"
        },
        {
            key: "-KdVviNtoPat0LH7iehc",
            photo: "177a52d1-e0bf-40ac-9566-0a446529801c.jpg",
            products: [
                {
                    key: "-KeKzVstpgSRbsTaUohq",
                    title: "T-Shirt",
                    price: "$99",
                    crossPrice: "$125",
                    photo: "288e2e49-3fd5-429e-9ac9-f194e590a7a7.jpeg"
                },
                {
                    key: "-KdVww3pl-Rhc5Bl7hjI",
                    title: "Sirens",
                    price: "$27.90",
                    crossPrice: "$34.50",
                    photo: "177a52d1-e0bf-40ac-9566-0a446529801c.jpg"
                }
            ]
        }
    ];
    // slides = [
    //     {
    //         // Next attributes are reserved...
    //         // visible: ,
    //         // x: ,
    //         // cssClass: ,
    //         // key: ,
    //         image: 'http://lorempixel.com/g/400/800/city/1/1',
    //         children: [
    //             {image: 'http://lorempixel.com/400/800/city/1/1'},
    //             {image: 'http://lorempixel.com/400/800/city/2/2'},
    //             {image: 'http://lorempixel.com/400/800/city/3/3'},
    //             {image: 'http://lorempixel.com/400/800/city/4/4'},
    //             {image: 'http://lorempixel.com/400/800/city/5/5'},
    //             {image: 'http://lorempixel.com/400/800/city/6/6'},
    //             {image: 'http://lorempixel.com/400/800/city/7/7'},
    //         ]
    //     },
    //     {image: 'http://lorempixel.com/g/400/800/city/2/2'},
    //     {image: 'http://lorempixel.com/g/400/800/city/3/3'},
    //     {image: 'http://lorempixel.com/g/400/800/city/4/4'},
    //     {image: 'http://lorempixel.com/g/400/800/city/5/5'},
    //     {
    //         image: 'http://lorempixel.com/g/400/800/city/6/6',
    //         children: [
    //             {image: 'http://lorempixel.com/400/800/city/1/1'},
    //             {image: 'http://lorempixel.com/400/800/city/2/2'},
    //             {image: 'http://lorempixel.com/400/800/city/3/3'},
    //             {image: 'http://lorempixel.com/400/800/city/4/4'},
    //             {image: 'http://lorempixel.com/400/800/city/5/5'},
    //             {image: 'http://lorempixel.com/400/800/city/6/6'},
    //             {image: 'http://lorempixel.com/400/800/city/7/7'},
    //         ]
    //     },
    //     {image: 'http://lorempixel.com/g/400/800/city/7/7'},
    //     {image: 'http://lorempixel.com/g/400/800/city/8/8'},
    //     {image: 'http://lorempixel.com/g/400/800/city/9/9'},
    //     {image: 'http://lorempixel.com/g/400/800/city/10/10'}
    // ];

    render() {
        return (
            <div className="App" style={{width: '500px', backgroundColor: '#000'}}>
                <Rotate slides={this.products} width="56vh" density="1" />
            </div>
        );
    }
}

export default App;
