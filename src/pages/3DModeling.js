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

    makeImgComp(source, caption, id, fc){
        return <div className='gallery-item'><img onClick={fc} id={id} src={source}/><p className='caption hidden'>{caption}</p></div>
    }

    toggleModel(ev){
        this.setState({
            current: ev.target.id
        })
    }

    render(){
        const {images, id, current} = this.state
        const imgComps = images.map((img, index)=>{
            return this.makeImgComp(img.image, img.caption,"m"+index, this.toggleModel.bind(this))
        })
        let modelComp = ""
        if(current && current.match(/^m/)){
            const model = current.match(/\d+/)[0]
            modelComp = <div className="model-box"><iframe allowfullscreen webkitallowfullscreen width="640" height="480" frameborder="0" seamless src={images[model].source}></iframe></div>
        }
        const titleImgStyle = {
            background: "url('../images/img-4.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
        return (
                <div>
                    <div className="title-image" style={titleImgStyle}><input type='button' className='page-down'/></div>
                    <div className="gallery">
                        {modelComp} 
                        {imgComps}
                    </div>
                </div>
    );
                
    }
}
