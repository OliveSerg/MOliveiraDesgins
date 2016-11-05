import React from 'react';
import Nav from '../components/Nav'

export default class Layout extends React.Component {
    constructor(){
        super()
    }

    render() {
        const {location} = this.props;

        return(
            <div>
                <Nav location={location}/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
