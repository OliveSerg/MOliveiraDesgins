import React from 'react';
import $ from 'jquery';
import images from "../images/images.js";
import Gallery from "../components/Gallery.js"
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
            },
            collapsed: {
                illustration: "collapsed",
                design: "collapsed"
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
            return <div onClick={this.toggleGallery.bind(this)} className='gallery-item'><img id={folder + index} src={source}/><p className='caption hidden'>{image.caption}</p></div>
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

    toggleCollapse(ev){
       let collapsed = this.state.collapsed
       if(ev.target.className.includes("illustration")){
           collapsed.illustration = collapsed.illustration ? "" : "collapsed"; 
           this.setState({
                collapsed,
            })        
       } else if(ev.target.className.includes("design")){
           collapsed.design = collapsed.design ? "" : "collapsed";
           this.setState({
                collapsed,
           })  
       }
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
                <h2 className='gallery-title t-illustration' onClick={this.toggleCollapse.bind(this)}>Digital Illustrations</h2>
                <div className={"gallery " + collapsed.illustration}>
                    {illustrationComponents}
                </div>
                <h2  className='gallery-title t-design' onClick={this.toggleCollapse.bind(this)}>Graphic Design</h2>
                <div className={"gallery " + collapsed.design}>
                    {graphicComponents}
                </div>
                <Footer backgroundStyle={footerStyle}/>
            </div>        
        ) 
    }
}
