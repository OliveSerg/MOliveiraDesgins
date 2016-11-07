import React from 'react';
import Promise from "promise";

export default class GraphicIllustrations extends React.Component {
    constructor(props){
        super()
        this.state = {
            illustrations: ["No Images"],
            graphicDesigns: ["No Images"], 
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

    render(){
        const {illustrations, graphicDesigns} = this.state
        return(
            <div>
                <img className="title-image" src="../images/img-2.jpg"/>
                <h2>Digital Illustrations</h2>
                <div className='gallery'>
                    {illustrations}
                </div>
                <h2>Graphic Design</h2>
                <div className='gallery'>
                    {graphicDesigns}
                </div>
            </div>        
        ) 
    }
}
