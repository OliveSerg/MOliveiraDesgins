import React from 'react';
import Promise from "promise";
import images from "../images/images.js";

export default class GraphicIllustrations extends React.Component {
    constructor(props){
        super()
        this.state = {
            illustrations: images.digital,
            graphicDesigns: images.graphic, 
            gallery: {
                hidden: true,
                current: 0
            },
            collapsed: {
                illustration: "collapsed",
                design: "collapsed"
            }
        }
        
    }

    makeImgComp(array){
        return array.map((image)=>{
            var source = image.source
            return <div className='gallery-item'><img src={source}/></div>
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
        const {illustrations, graphicDesigns, collapsed} = this.state
        const illustrationComponents = this.makeImgComp(illustrations)
        const graphicComponents = this.makeImgComp(graphicDesigns)
        const titleImgStyle = {
            background: "url('../images/img-2.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left 75%",
            height: "100vh"
        }
        return(
            <div>
                <div style={titleImgStyle}></div>
                <h2 className='gallery-title t-illustration' onClick={this.toggleCollapse.bind(this)}>Digital Illustrations</h2>
                <div className={"gallery " + collapsed.illustration}>
                    {illustrationComponents}
                </div>
                <h2  className='gallery-title t-design' onClick={this.toggleCollapse.bind(this)}>Graphic Design</h2>
                <div className={"gallery " + collapsed.design}>
                    {graphicComponents}
                </div>
            </div>        
        ) 
    }
}
