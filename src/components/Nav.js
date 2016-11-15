import React from 'react';
import {IndexLink, Link} from 'react-router';

export default class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            collapsed: false,
            active: false,
        }
    }

    toggleCollapse(ev){
        var active = true
        if(ev.target.id === "back"){
            active = false
        }
        window.scrollTo(0,0)
        const collapsed = !this.state.collapsed;
        this.setState({collapsed, active,});
    }

    render(){
        const {location} = this.props;
        const {collapsed, active} = this.state;
        const navClass = collapsed ? "slide-out" : "slide-in";
        const backButton = navClass === "slide-out" ? "back" : "hide";
        const activeStyle = active ? {opacity: 0} : {};
        return(
            <div>    
                <nav role='navigation' className={"nav-box "+navClass}>
                 <IndexLink activeStyle={activeStyle} className='about nav-item' to='/' onClick={this.toggleCollapse.bind(this)}>
                   About
                 </IndexLink>
                 <Link activeStyle={activeStyle} className='graphic-illustration nav-item' to='graphic-illustrations' onClick={this.toggleCollapse.bind(this)}>
                   Graphic Illustrations
                 </Link>
                 <Link activeStyle={activeStyle} className='modeling nav-item' to='3d-modeling' onClick={this.toggleCollapse.bind(this)}>
                   3D Modeling
                 </Link>
                 <Link activeStyle={activeStyle} className='contact nav-item' to='contact' onClick={this.toggleCollapse.bind(this)}>
                   Contact
                 </Link>
                </nav>
                <input id="back" className={backButton} type='button' onClick={this.toggleCollapse.bind(this)}/>
            </div>        
        )
    }
}
