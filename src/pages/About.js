import React from 'react';

export default class About extends React.Component {
    constructor(){
        super()
    }

    render() {
        const titleImgStyle = {
            background: "url('../images/img-1.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        return(
            <div>
                <div className="title-image" style={titleImgStyle}><input type='button' className='page-down'/></div>
                <img className="self-icon" src="../images/self.png"/>
                <h3>Micheal Oliveira</h3>
                <p>
                A digital illustrator, graphic designer, animator and 3D modeler who has a passion for Video Games.<br/>I completed my 1 year Graduate Certificate in 3D Animation and Character Design as well as my 3 year Advanced Diploma in Graphic Design at Fanshawe College. I seek experience and to further enhance my skills to become a better and more refined designer. For business inquiries contact moliveira.designsgmail.com.
                </p>    
            </div>
        )
    }
}
