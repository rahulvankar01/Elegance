import React from 'react'
import Google from './Google'
import Fotter from './Fotter'
import Last from './Last'

const Contact = () => {
  return (
    <div>
        <div class="contact">
        <div class="contact1">
            <h1>CONTACT</h1>
            <hr/>
            <hr/>
            <p>Thanks for taking the time to contact us!<br/>
                We do our best to respond to quickly, it could take us 1-2 business days to get back to you. Feel free to say hello!</p>

                <div class="contact2">
                    Name:
                    <input type="text" placeholder="Enter Your Name"/>
                    <br/>
                    <br/>

                    Email Address:
                    <input type="email" placeholder="Enter your email address"/>
                    <br/>
                    <br/>

                    Your Message:
                    <br/>
                    <textarea class="message"  placeholder="Enter Your Message Here"></textarea>

                    <div class="contact2-sand"> <a href="#">send</a></div>
                </div>
        </div>
    </div>
    <Google></Google>
    <Fotter></Fotter>
    <Last></Last>
    </div>
  )
}

export default Contact
