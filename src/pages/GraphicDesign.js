import React from 'react';

export default class Design extends React.Component {
    constructor(){
        super()
        this.state = {
            images: false
        }
    }

    componentDidMount(){
        this.props.getImages('Graphic').then((response)=>{
                this.setState({
                    images: response.data
                })
             }).catch((error)=>{
                 return "No files";
             })
    }

    render(){
        const {images} = this.state
        let gallery = ["No Images"]
        if(images){
            gallery = images.map((image)=>{
                var source =`../images/Graphic/${image}` 
                return <img src={source}/>
            })
        }
        return(
            <div>
                <img className="title-image" src="../images/img-3.jpg"/>
                <h2>Graphic Design</h2>
                <div>
                    {gallery}
                </div>
                <h2>Sketches</h2>
                <p>Images</p>
            </div>        
        )
    }
}
