import React from "react";

export default class GalleryContainer extends React.Component {
    constructor(props){
        super()
    }

    render(){
        const galleryOverflow = {
            height: "500px",
            overflowY: "scroll"
        }
        return(
            <div style={{maxWidth: "1170px", margin: "auto"}}>
                <h2 className='gallery-title'>{this.props.title}</h2>
                <div style={galleryOverflow}>
                    <div className="gallery">
                        {this.props.children}
                    </div>    
                </div>
            </div>        
        )
    }
}
