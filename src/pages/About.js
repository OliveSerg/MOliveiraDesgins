import React from 'react';
import Footer from '../components/Footer.js'
import $ from 'jquery'

export default class About extends React.Component {
    constructor(){
        super()
    }

    pageDown(){
        $('html, body').animate({
            scrollTop: window.innerHeight
        })
    }

    render() {
        const titleImgStyle = {
            background: "url('../images/img-1.jpg') no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        const footerStyle = {
            color: "#fff",
            backgroundColor: "#272F77",
            opacity: 0.9
        }
        return(
            <div>
                <div className="title-image" style={titleImgStyle}>
                    <input onClick={this.pageDown.bind(this)} type='button' className='page-down'/>
                </div>
                <div className="self-icon">
                    <img src="../images/self.png"/>
                </div>
                <h3 className="name">Micheal Oliveira</h3>
                <p className="bio">
                A digital illustrator, graphic designer, animator and 3D modeler who has a passion for Video Games.<br/>I completed my 1 year Graduate Certificate in 3D Animation and Character Design as well as my 3 year Advanced Diploma in Graphic Design at Fanshawe College. I seek experience and to further enhance my skills to become a better and more refined designer. For business inquiries contact moliveira.designsgmail.com.
                </p>    
                <Footer backgroundStyle={footerStyle}/>
            </div>
        )
    }
}
