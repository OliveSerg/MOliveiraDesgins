import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            collapsed: false,
        }
    }

    toggleCollapse(){
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render(){
        const {location} = this.props;
        const {collapsed} = this.state;
        const navClass = collapse ? "collapse" : "hidden";
        const backButton = navClass ? "back" : "hidden";

        return(
            <div class={navClass}>
                <IndexLink to='/' onClick={this.toggleCollapse.bind(this)}>About</IndexLink>
                <Link to='illustrations' onClick={this.toggleCollapse.bind(this)}>Illustrations</Link>
                <Link to='' onClick={this.toggleCollapse.bind(this)}>Something</Link>
                <Link to='' onClick={this.toggleCollapse.bind(this)}>3D Modeling</Link>
                <input class={backButton} type='button' onCLick={this.toggleCollapse.bind(this)}/>
            </div>        
        )
    }
}
