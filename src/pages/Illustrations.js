import React from 'react';

export default class Illustrations extends React.Component {
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <img className="title-image" src="../images/img-2.jpg"/>
                <h2>Digital Illustrations</h2>
                <p>Images</p>
                <h2>Traditional Artwork</h2>
                <p>Images</p>
            </div>        
        ) 
    }
}
