import React from 'react';
import axios from 'axios';
import Nav from '../components/Nav'

export default class Layout extends React.Component {
    constructor(){
        super()
    }

    getImages(folder){
        axios.get('http://localhost:8080/images')
             .then((response)=>{
                console.log(response)   
             })
    }

    render() {
        const {location} = this.props;
        const newChildren = React.Children.map(
                this.props.children, 
                (child)=> 
                React.cloneElement(child, {getImages: this.getImages})
        )
        console.log(newChildren)

        return(
            <div>
                <Nav location={location}/>
                <div>
                    {newChildren}
                </div>
            </div>
        )
    }
}
