import React from 'react';
import axios from 'axios';
import Nav from '../components/Nav'

export default class Layout extends React.Component {
    constructor(){
        super()
    }

    getImages(folder){
        console.log(folder)
        return axios.get(
                'http://localhost:3000/images',
                {params: {folder,}}
                )
    }

    render() {
        const {location} = this.props;
        const newChildren = React.Children.map(
                this.props.children, 
                (child)=> 
                React.cloneElement(child, {getImages: this.getImages})
        )
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
