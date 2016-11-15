import React from 'react';
import $ from "jquery";
import images from "../images/images.js";
import Gallery from "../components/Gallery.js"
import GalleryContainer from "../components/GalleryContainer.js"
import Footer from "../components/Footer.js"

export default class Modeling extends React.Component {
    constructor(props){
        super()
        const id = props.params.id ? props.params.id : null;
        this.state = {
            images: images.modeling
        }
    }

    pageDown(){
        $('html, body').animate({
            scrollTop: window.innerHeight + 100
        })
    }

    makeImgComp(source, caption, id){
        return <div className='gallery-item'><img onClick={this.toggleGallery.bind(this)} id={id} src={source}/><p className='caption hide'>{caption}</p></div>
    }

    toggleGallery(ev){
        var current = ev.target.id
        if(this.state.current === ev.target.id){
           current = "" 
        }
        this.setState({
            current,
        })
        if(current.includes("m")){
            $('html, body').animate({
                scrollTop: $(".model-box").offset().top
            })
        }
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
            modelComp = <iframe allowfullscreen webkitallowfullscreen width="640" height="480" frameborder="0" seamless src={images.models[model].source}></iframe>
        } else if(current && current.match(/^i/)){
            const model = current.match(/\d+/)[0]
            galleryComp = <Gallery current={model}>{imgComps}</Gallery> 
        } else {
            modelComp = <h1>Please Choose a Model</h1>
        }
        const titleImgStyle = {
            background: "url('../images/img-4.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
        const footerStyle = {
            color: "#fff",
            backgroundColor: "#B1544B",
            textAlign: "center",
            opacity: 0.9
        }
        return (
                <div>
                    {galleryComp}
                    <div className="title-image" style={titleImgStyle}>
                        <input onClick={this.pageDown.bind(this)} type='button' className='page-down'/>
                    </div>
                    <GalleryContainer backgroundStyle={footerStyle} title="Still 3D Images">
                        {imgComps}
                    </GalleryContainer>
                    <div className="model-box">
                        {modelComp} 
                    </div>
                    <GalleryContainer backgroundStyle={footerStyle} title="3D Models">
                        {modelComps}
                    </GalleryContainer>
                    <Footer backgroundStyle={footerStyle}/>
                </div>
            );
                
    }
}
