import React, { Component } from 'react';
import './R0tat3.css';
import Slide from "./sl1d3/Sl1d3";

class Rotate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            selected: -1,
            width: props.width,
            density: props.density,
            data: props.slides,
            slides: this.prepareSlides(props.slides).map((slide, index) => {
                slide.visible = (index === 0);
                slide.x = 0;
                slide.cssClass = (index === 0) ? '--initial' : '--inactive';
                slide.key = index + (slide.isCopy ? '-copy-' + slide.isCopy : '');

                return slide;
            })
        };

        this.keyDown = this.keyDown.bind(this);

        document.addEventListener('keydown', this.keyDown);
    }

    prepareSlides(slides) {
        let coef = Math.floor(7 / slides.length),
        outSlides = [];
        for (let i = 0; i < coef + 1; i++) {
            outSlides = outSlides.concat(slides.map((slide, index) => {
                return Object.assign({isCopy: i + 1, originalIndex: index}, slide);
            }));
        }
        return outSlides;
    }

    update(next) {
        next = (typeof next !== 'undefined') ? next : this.state.current;
        this.setState({
            current: next,
            slides: this.state.slides.map((slide, index, slides) => {
                slide.visible = true;

                //Magic part of code (calculating slides positions...)
                slide.x = (index === next) ? 0 :
                    (next - 3 < 0 && index >= slides.length + (next - 3)) ? -next - (slides.length - index) :
                        (next + 3 > slides.length - 1 && index <= (next + 3) - slides.length) ? index - (next - slides.length) : index - next;

                slide.visible = Math.abs(slide.x) <= 2;
                slide.cssClass = slide.x < 0 ? '--left' : slide.x > 0 ? '--right' : '--center';

                return slide;
            })
        });
    }

    changeData() {
        let nextData, nextIndex,
            originalIndex = this.state.slides[this.state.current].originalIndex;
        if (this.state.selected !== -1 ||
            (this.state.data[originalIndex].children &&
            this.state.data[originalIndex].children.length)) {

            nextData = (this.state.selected === -1) ?
                this.prepareSlides(this.state.data[originalIndex].children) : this.prepareSlides(this.state.data);
            nextIndex = this.state.selected !== -1 ? this.state.selected : 0;

            //To Initial state
            this.setState({
                slides: this.state.slides.map((slide, index) => {
                    slide.x = 0;
                    slide.cssClass = (index === this.state.current) ? '--initial' : '--inactive';

                    return slide;
                }),
            });

            //To pre-initial
            window.setTimeout(() => {
                this.setState({
                    slides: this.state.slides.map((slide, index) => {
                        slide.cssClass = (index === this.state.current) ? '--initial --to-out' : '--inactive --to-out';
                        return slide;
                    }),
                });
            }, 200);

            //Prepare another data
            window.setTimeout(() => {
                this.setState({
                    selected: this.state.selected === -1 ? originalIndex : -1,
                    current: nextIndex,
                    slides: nextData.map((slide, index) => {
                        slide.visible = (index === nextIndex);
                        slide.x = 0;
                        slide.cssClass = (index === nextIndex) ? '--pre-initial' : '--inactive';
                        slide.key = index + ((this.state.selected === -1) ? '-child' : '');

                        return slide;
                    }),
                });
            }, 500);

            //To initial state
            window.setTimeout(() => {
                this.setState({
                    slides: this.state.slides.map((slide, index) => {
                        slide.cssClass = (index === nextIndex) ? '--initial' : '--inactive';

                        return slide;
                    }),
                });
            }, 510);

            //To ready
            window.setTimeout(() => {
                this.update();
            }, 800);
        } else {
            console.log('There are no any children...');
        }
    }

    keyDown(event) {
        let next = this.state.current;
        if (event.keyCode === 37) {
            next = (next === 0) ? this.state.slides.length - 1 : next - 1;
            this.update(next);
        } else if (event.keyCode === 39) {
            next = (next === this.state.slides.length - 1) ? 0 : next + 1;
            this.update(next);
        } else if (event.keyCode === 38) {
            this.changeData();
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.update(0);
        }, 300);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDown);
    }

    render() {
        return (
            <div className="rotate-container" style={{width: this.state.width}}>
                <div className={'rotate-main' + (this.state.selected !== -1 ? ' inner' : '')}>
                    {this.state.slides.map((slide) => {
                        return <Slide key={slide.key} data={slide} density={this.state.density}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default Rotate;