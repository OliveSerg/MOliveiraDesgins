import React from 'react';
import $ from 'jquery';
import Footer from "../components/Footer.js";

export default class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            email: "",
            name: "",
            message: "",
            sent: false
        }
    }

    mail(ev){
        ev.preventDefault()
        var {contact_form, contact_email, contact_name, contact_message} = this.refs
        const email = this.validEmail()
        const name = this.validName()
        const message = this.validMessage()
        const action = "http://www.focuspocus.io/magic/moliveira.designs@gmail.com"
        if(email && name && message){
            $.ajax({
                url: action,
                type: "POST",
                data: {
                    email: contact_email.value,
                    name: contact_name.value,
                    message: contact_message.value
                }
            }).always((response)=>{
                contact_email.value = "";
                contact_name.value = "";
                contact_message.value = "";
                this.setState({
                    sent: true
                })
            })
        }
    }

    validEmail(){
        const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/i
        if(reg.test(this.refs.contact_email.value)){
            this.setState({
                email: ""
            })
            return true
        } else {
            this.setState({
                email: "error"
            })
            return false
        }
    }

    validName(){
        const reg = /^[a-zA-Z0-9\s]+$/
        if(reg.test(this.refs.contact_name.value)){
            this.setState({
                name: ""
            })
            return true
        } else {
            this.setState({
                name: "error"
            })
            return false
        }
    }

    validMessage(){
        if(this.refs.contact_message.value){
            this.setState({
                message: ""
            })
            return true
        } else {
            this.setState({
                message: "error"
            })
            return false
        }
    }

    render() {
        const {email, name, message, sent} = this.state
        let sentComp = ""
        if(sent){
            sentComp = <p className="sent">Thank you for contacting me.<br/> I will get back to you as soon as I can.</p>
        }
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
                    {sentComp}
                    <div className="form-box">
                    <form ref='contact_form' className='form' onSubmit={this.mail.bind(this)} >
                        <h2>Contact Me</h2>
                        <input className={name} type="text" onBlur={this.validName.bind(this)} name="name" ref="contact_name" placeholder="Name"/>
                        <input className={email} type="email" onBlur={this.validEmail.bind(this)} name="email" ref="contact_email" placeholder="Email"/>
                        <textarea className={message} type="textarea" onBlur={this.validMessage.bind(this)} name="message" ref="contact_message" placeholder="Message..."></textarea>
                        <button className="button" name="submit" type="submit">Send Message</button>
                    </form>
                    </div>
                    <Footer backgroundStyle={footerStyle}/>
                </div>
              </div>
        )
    }
}
