import React from 'react';
import images from "../images/images.js";
import Gallery from "../components/Gallery.js"

export default class Modeling extends React.Component {
    constructor(props){
        super()
        const id = props.params.id ? props.params.id : null;
        this.state = {
            images: images.modeling
        }
    }

    makeImgComp(source, caption, id){
        return <div className='gallery-item'><img onClick={this.toggleGallery.bind(this)} id={id} src={source}/><p className='caption hidden'>{caption}</p></div>
    }

    toggleGallery(ev){
        const current = this.state.current ? "" : ev.target.id;
        this.setState({
            current,
        })
    }

    render(){
        const {images, id, current} = this.state
        const modelComps = images.models.map((img, index)=>{
            return this.makeImgComp(img.image, img.caption,"m"+index)
        })
        const imgComps = images.images.map((img, index)=>{
            return this.makeImgComp(img.source, img.caption, "i"+index)
        })
        let modelComp = ""
        let galleryComp = ""
        if(current && current.match(/^m/)){
            const model = current.match(/\d+/)[0]
            modelComp = <div className="model-box"><iframe allowfullscreen webkitallowfullscreen width="640" height="480" frameborder="0" seamless src={images.models[model].source}></iframe></div>
        } else if(current && current.match(/^i/)){
            const model = current.match(/\d+/)[0]
            galleryComp = <Gallery current={model}>{imgComps}</Gallery> 
        }
        const titleImgStyle = {
            background: "url('../images/img-4.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
        return (
                <div>
                    {galleryComp}
                    <div className="title-image" style={titleImgStyle}><input type='button' className='page-down'/></div>
                    <div className="gallery">
                        {imgComps}
                    </div>
                    {modelComp} 
                    <div className="gallery">
                        {modelComps}
                    </div>
                </div>
    );
                
    }
}
