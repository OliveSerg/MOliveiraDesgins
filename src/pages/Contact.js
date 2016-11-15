import React from 'react';
import $ from 'jquery';
import Footer from "../components/Footer.js";

export default class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            email: true,
            name: true,
            message: true
        }
    }

    mail(ev){
        ev.preventDefault()
        const {contact_form, contact_email, contact_name, contact_message} = this.refs
        const email = this.validEmail()
        const name = this.validName()
        const action = "http://www.focuspocus.io/magic/moliveira.designs@gmail.com"
        if(email && name){
            $.ajax({
                url: action,
                type: "POST",
                data: {
                    email: contact_email.value,
                    name: contact_name.value,
                    message: contact_message.value
                }
            }).always((response)=>{
                console.log(response)
            })
        }
    }

    validEmail(){
        const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/i
        if(reg.test(this.refs.contact_email.value)){
            return true
            this.setState({
                email: true
            })
        } else {
            return false
            this.setState({
                email: false
            })
        }
    }

    validName(){
        const reg = /^[a-zA-Z0-9\s]$/
        if(reg.test(this.refs.contact_name.value)){
            return true
            this.setState({
                name: true
            })
        } else {
            return false
            this.setState({
                name: false
            })
        }
    }

    vaildMessage(){
        if(this.refs.contact_message.value){
            return true
            this.setState({
                message: true
            })
        } else {
            return false
            this.setState({
                message: false
            })
        }
    }

    render() {
        const {email, name, message} = this.state
        const footerStyle = {
            color: "#fff",
            backgroundColor: "#373433",
            textAlign: "center",
            opacity: 0.9,
            bottom: 0,
            position: "absolute"
        }
        return(
              <div className="contact">
                <div className="contact-box">
                    <div className="form-box">
                    <form ref='contact_form' className='form' onSubmit={this.mail.bind(this)} >
                        <h2>Contact Me</h2>
                        <input type="text" name="name" ref="contact_name" placeholder="Name"/>
                        <input type="email" name="email" ref="contact_email" placeholder="Email"/>
                        <textarea type="textarea" name="message" ref="contact_message" placeholder="Message..."></textarea>
                        <button className="button" name="submit" type="submit">Send Message</button>
                    </form>
                    </div>
                    <Footer backgroundStyle={footerStyle}/>
                </div>
              </div>
        )
    }
}
