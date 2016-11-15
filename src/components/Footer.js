import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super()
    }

    render(){
        const {backgroundStyle} = this.props
        return(
            <div className="footer" style={backgroundStyle}>
                <a className="sm" href="https://www.facebook.com/michael.oliveira.965" target="_blank"><img src="../images/sm/1fb.png"  width="20"/></a>
                <a className="sm" href="https://www.behance.net/molivedesigns" target="_blank"><img src="../images/sm/3be.png" width="20"/></a>
                <a className="sm" href="https://ca.linkedin.com/in/michaeloliveiradesigns" target="_blank"><img src="../images/sm/4in.png" width="20"/></a>
                <a className="sm" href="https://www.youtube.com/user/SuperMonkeyBawlz/videos?shelf_id=0&sort=dd&view=0" target="_blank"><img src="../images/sm/5yu.png" width="20"/></a>
                <p> &copy;  Michael Oliveira 2016</p>
            </div>        
        )
    }
}
