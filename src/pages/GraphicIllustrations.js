import React from 'react';
import $ from 'jquery';
import images from "../images/images.js";
import Gallery from "../components/Gallery.js"
import GalleryContainer from "../components/GalleryContainer.js"
import Footer from "../components/Footer.js"

export default class GraphicIllustrations extends React.Component {
    constructor(props){
        super()
        this.state = {
            illustrations: images.digital,
            graphicDesigns: images.graphic, 
            gallery: {
                show: false,
                current: "0"
            }
        }
        
    }

    pageDown(){
        $('html, body').animate({
            scrollTop: window.innerHeight
        })
    }

    makeImgComp(array, folder){
        return array.map((image, index)=>{
            var source = image.source
            return <div onClick={this.toggleGallery.bind(this)} className='gallery-item'><img id={folder + index} src={source}/><p className='caption hide'>{image.caption}</p></div>
        })
    }

    toggleGallery(ev){
        const show = !this.state.gallery.show
        const current = ev.target.id ? ev.target.id : "0"; 
        const gallery = {
            show,
            current,
        }
        this.setState({
            gallery,
        })
    }

    render(){
        const {illustrations, graphicDesigns, collapsed, gallery} = this.state
        const illustrationComponents = this.makeImgComp(illustrations, "i")
        const graphicComponents = this.makeImgComp(graphicDesigns, "g")
        let galleryComponent = "";
        if(gallery.show){
           const galleryComponents = gallery.current.match(/^i/) ? illustrationComponents : graphicComponents;
           const current = gallery.current.match(/\d+/)[0]
           galleryComponent =<Gallery current={current}>{galleryComponents}</Gallery>
        }
        const titleImgStyle = {
            background: "url('../images/img-2.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left 75%",
            height: "100vh"
        }
        const footerStyle = {
            color: "#fff",
            backgroundColor: "#717171",
            opacity: 0.9
        }

        return(
            <div>
                {galleryComponent}
                <div className="title-image" style={titleImgStyle}>
                        <input onClick={this.pageDown.bind(this)} type='button' className='page-down'/>
                </div>
                <GalleryContainer title="Digital Illustration">
                    {illustrationComponents}
                </GalleryContainer>
                <GalleryContainer title="Graphic Design">
                    {graphicComponents}
                </GalleryContainer>
                <Footer backgroundStyle={footerStyle}/>
            </div>        
        ) 
    }
}
