import React from 'react';
import images from "../images/images.js";

export default class Modeling extends React.Component {
    constructor(props){
        super()
        const id = props.params.id ? props.params.id : null;
    }

    makeImgComp(array, folder){
        return array.map((image, index)=>{
            var source = image.source
            return <div className='gallery-item'><img id={folder + index} src={source}/><p className='caption hidden'>{image.caption}</p></div>
        })
    }

    render(){
        const {images, id} = this.state
        const imageComponents = this.makeImgComp(images, "s")

        return ( 
            <div>
                3D-Models
            </div>        
        );
                
    }
}
