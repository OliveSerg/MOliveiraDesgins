import React from 'react';
import images from "../images/images.js";

export default class Modeling extends React.Component {
    constructor(props){
        super()
        const id = props.params.id ? props.params.id : null;
        this.state = {
            images: images.modeling.models
        }
    }

    makeImgComp(array, folder){
        return array.map((image, index)=>{
            var source = image.source
            return <div className='gallery-item'><img id={folder + index} src={source}/><p className='caption hidden'>{image.caption}</p></div>
        })
    }

    render(){
        const {images, id} = this.state
        return (
                <iframe allowfullscreen webkitallowfullscreen width="640" height="480" frameborder="0" seamless src={images[0].source}></iframe>
    );
                
    }
}
