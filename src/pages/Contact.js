import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            email: true,
            name: true,
            message: true
        }
    }

    mail(){
        const {contact_email, contact_name, contact_message} = this.refs
        const email = this.validEmail(contact_email.value)
        const name = this.validName(contact_name.value)

        axios.post('http://localhost:3000/mail', {
            email: contact_email.value,
            name: contact_name.value,
            message: contact_message.value
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((response)=>{
            console.log(response)
        })
    }

    validEmail(email){
        const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/i
        if(reg.test(email)){
            return true
        } else {
            return false
        }
    }

    validName(name){
        const reg = /^[a-zA-Z0-9\s]$/
        if(reg.test(name)){
            return true
        } else {
            return false
        }
    }

    render() {
        return(
              <div>
                <input type="text" ref="contact_name" placeholder="Name"/>
                <input type="email" ref="contact_email" placeholder="Email"/>
                <input type="textarea" ref="contact_message" placeholder="Message..."/>
                <button onClick={this.mail.bind(this)}>Send Message</button>
              </div>
        )
    }
}
