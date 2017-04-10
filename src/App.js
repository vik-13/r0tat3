import React, { Component } from 'react';
import './App.css';
import Rotate from "./r0tat3/R0tat3";

class App extends Component {
    slides = [
        {
            // Next attributes are reserved...
            // visible: ,
            // x: ,
            // cssClass: ,
            // key: ,
            image: 'http://lorempixel.com/g/400/800/city/1/1',
            children: [
                {image: 'http://lorempixel.com/400/800/city/1/1'},
                {image: 'http://lorempixel.com/400/800/city/2/2'},
                {image: 'http://lorempixel.com/400/800/city/3/3'},
                {image: 'http://lorempixel.com/400/800/city/4/4'},
                {image: 'http://lorempixel.com/400/800/city/5/5'},
                {image: 'http://lorempixel.com/400/800/city/6/6'},
                {image: 'http://lorempixel.com/400/800/city/7/7'},
            ]
        },
        {image: 'http://lorempixel.com/g/400/800/city/2/2'},
        {image: 'http://lorempixel.com/g/400/800/city/3/3'},
        {image: 'http://lorempixel.com/g/400/800/city/4/4'},
        {image: 'http://lorempixel.com/g/400/800/city/5/5'},
        {
            image: 'http://lorempixel.com/g/400/800/city/6/6',
            children: [
                {image: 'http://lorempixel.com/400/800/city/1/1'},
                {image: 'http://lorempixel.com/400/800/city/2/2'},
                {image: 'http://lorempixel.com/400/800/city/3/3'},
                {image: 'http://lorempixel.com/400/800/city/4/4'},
                {image: 'http://lorempixel.com/400/800/city/5/5'},
                {image: 'http://lorempixel.com/400/800/city/6/6'},
                {image: 'http://lorempixel.com/400/800/city/7/7'},
            ]
        },
        {image: 'http://lorempixel.com/g/400/800/city/7/7'},
        {image: 'http://lorempixel.com/g/400/800/city/8/8'},
        {image: 'http://lorempixel.com/g/400/800/city/9/9'},
        {image: 'http://lorempixel.com/g/400/800/city/10/10'}
    ];

    render() {
        return (
            <div className="App" style={{width: '500px', backgroundColor: '#aaa'}}>
                <Rotate slides={this.slides} width="400" density="1" />
            </div>
        );
    }
}

export default App;
