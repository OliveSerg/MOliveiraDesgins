import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super()
    }

    render(){
        const {backgroundStyle} = this.props
        return(
            <div className="footer" style={backgroundStyle}>
                <a href="https://www.facebook.com/michael.oliveira.965" target="_blank"><img src="../images/sm/1fb.png" className="sm" width="20"/></a>
                <a href="https://www.behance.net/molivedesigns" target="_blank"><img src="../images/sm/3be.png" className="sm" width="20"/></a>
                <a href="https://ca.linkedin.com/in/michaeloliveiradesigns" target="_blank"><img src="../images/sm/4in.png" className="sm" width="20"/></a>
                <a href="https://www.youtube.com/user/SuperMonkeyBawlz/videos?shelf_id=0&sort=dd&view=0" target="_blank"><img src="../images/sm/5yu.png" className="sm" width="20"/></a>
                <p> &copy;  Michael Oliveira 2016</p>
            </div>        
        )
    }
}
