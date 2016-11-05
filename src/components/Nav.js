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
        const navClass = collapsed ? "collapse" : "hidden";
        const backButton = navClass ? "back" : "hidden";

        return(
            <nav role='navigation' className={navClass}>
                <IndexLink className='about nav-item' to='/' onClick={this.toggleCollapse.bind(this)}>About</IndexLink>
                <Link className='illustration nav-item' to='illustrations' onClick={this.toggleCollapse.bind(this)}>Illustrations</Link>
                <Link className='design nav-item' to='designs' onClick={this.toggleCollapse.bind(this)}>Graphic Design</Link>
                <Link className='modeling nav-item' to='3d-modeling' onClick={this.toggleCollapse.bind(this)}>3D Modeling</Link>
                <input className={backButton} type='button' onClick={this.toggleCollapse.bind(this)}/>
            </nav>        
        )
    }
}
