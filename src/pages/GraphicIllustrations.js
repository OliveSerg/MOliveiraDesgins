import React from 'react';
import Promise from "promise";

export default class GraphicIllustrations extends React.Component {
    constructor(props){
        super()
        this.state = {
            illustrations: false,
            graphicDesigns: false
        }
    }

    componentDidMount(){
        const {getImages} = this.props
        const requests = [getImages('Digital'), getImages('Graphic')]
        Promise.all(requests).then((responses)=>{
                console.log(responses)
                this.setState({
                    illustrations: responses[0].data,
                    graphicDesigns: responses[1].data
                })
             }).catch((error)=>{
                 return "No files";
             })
    }

    render(){
        const {illustrations, graphicDesigns} = this.state
        let gallery = ["No Images"]
        if(false){
            gallery = images.map((image)=>{
                var source =`../images/Digital/${image}` 
                return <img src={source}/>
            })
        }
        return(
            <div>
                <img className="title-image" src="../images/img-2.jpg"/>
                <h2>Digital Illustrations</h2>
                <div>
                    {gallery}
                </div>
                <h2>Graphic Design</h2>
                <div>
                    {gallery}
                </div>
            </div>        
        ) 
    }
}
