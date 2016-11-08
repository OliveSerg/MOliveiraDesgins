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
        const navClass = collapsed ? "nav-box" : "hidden";
        const backButton = navClass === "hidden" ? "back" : "hidden";

        return(
            <div>    
                <nav role='navigation' className={navClass}>
                 <IndexLink className='about nav-item' to='/' onClick={this.toggleCollapse.bind(this)}>
                   About
                 </IndexLink>
                 <Link className='graphic-illustration nav-item' to='graphic-illustrations' onClick={this.toggleCollapse.bind(this)}>
                   Graphic Illustrations
                 </Link>
                 <Link className='modeling nav-item' to='3d-modeling' onClick={this.toggleCollapse.bind(this)}>
                   3D Modeling
                 </Link>
                 <Link className='contact nav-item' to='contact' onClick={this.toggleCollapse.bind(this)}>
                   Contact
                 </Link>
                </nav>
                <input className={backButton} type='button' onClick={this.toggleCollapse.bind(this)}/>
            </div>        
        )
    }
}
