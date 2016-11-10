import React from 'react';

export default class Gallery extends React.Component {
    constructor(props){
        super()
        const currentSlide = props.children[props.current]
        this.state = {
            slides: props.children,
            currentIndex: parseInt(props.current),
            currentSlide,
        }
    }

    prevSlide(){
        const {currentIndex, slides} = this.state
        let prevSlide;
        let prevIndex = currentIndex-1
        if(currentIndex-1 < 0){
            prevIndex = slides.length-1
            prevSlide = slides[prevIndex]
        } else {
            prevSlide = slides[prevIndex]
        }
        this.setState({
            currentIndex: prevIndex,
            currentSlide: prevSlide
        })
    }

    nextSlide(){
        const {currentIndex, slides} = this.state
        let nextSlide;
        let nextIndex = currentIndex+1
        if(nextIndex >= slides.length){
            nextIndex = 0
            nextSlide = slides[0]
        } else {
            nextSlide = slides[currentIndex+1]
        }
        this.setState({
            currentIndex: nextIndex,
            currentSlide: nextSlide
        })
    }

    render() {
        const {currentSlide} = this.state
        return(
            <div  className='slider-box'>
                <input type='button' className='arrow previous' onClick={this.prevSlide.bind(this)}/>
                {currentSlide}
                <input type='button' className='arrow next' onClick={this.nextSlide.bind(this)}/>
            </div>        
        )
    }
}
