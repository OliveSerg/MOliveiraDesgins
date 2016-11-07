import React from 'react';
import Promise from "promise";

export default class GraphicIllustrations extends React.Component {
    constructor(props){
        super()
        this.state = {
            illustrations: ["No Images"],
            graphicDesigns: ["No Images"], 
            collapsed: {
                illustration: "collapsed",
                design: "collapsed"
            }
        }
    }

    componentDidMount(){
        const {getImages} = this.props
        const folder = ['Digital', 'Graphic']
        const requests = [getImages(folder[0]), getImages(folder[1])]
        Promise.all(requests).then((responses)=>{
            this.setState({
                illustrations: this.makeImgComp( folder[0], responses[0].data),
                graphicDesigns: this.makeImgComp( folder[1], responses[1].data)
            })
        }).catch((error)=>{
            return "No files";
        })
    }
    
    makeImgComp(folder, array){
        return array.map((image)=>{
            var source = `../images/${folder}/${image}`
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
        return(
            <div>
                <img className="title-image" src="../images/img-2.jpg"/>
                <h2 className='gallery-title t-illustration' onClick={this.toggleCollapse.bind(this)}>Digital Illustrations</h2>
                <div className={"gallery " + collapsed.illustration}>
                    {illustrations}
                </div>
                <h2  className='gallery-title t-design' onClick={this.toggleCollapse.bind(this)}>Graphic Design</h2>
                <div className={"gallery " + collapsed.design}>
                    {graphicDesigns}
                </div>
            </div>        
        ) 
    }
}
