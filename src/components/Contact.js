import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonContainer from './Button';

export default class Contact extends Component {
    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send'
    }
    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }
    render() {
        return (
            <FormWrapper className="mx-auto flex-container container">
                <div className="row ">
                    <div className="col mt-5">
                        <h6>
                            Contact: Lata Kothari: <br />
                            Address:
                        </h6>

                    </div>
                    <div className="col">
                        <i> Google map</i>

                    </div>
                    <div className="col">
                        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>

                            <i className="fas fa-user prefix grey-text"> </i> &nbsp;
                    <label className="message-name mt-3" htmlFor="message-name">Name: </label>
                            <input onChange={e => this.setState({ name: e.target.value })} name="name" className="message-name form-control" type="text" placeholder="John Smith" value={this.state.name} />

                            <i class="fas fa-envelope prefix grey-text"> </i> &nbsp;
                    <label class="message-email mt-3" htmlFor="message-email">Email:</label>
                            <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="message-email form-control" type="email" placeholder="your@email.com" required value={this.state.email} />

                            <i class="fas fa-pencil-alt prefix grey-text"></i> &nbsp;
                    <label class="message mt-3" htmlFor="message-input">Message:</label>
                            <textarea onChange={e => this.setState({ message: e.target.value })} name="message" class="message-input form-control" type="text" placeholder="Type your message..." value={this.state.message} required />

                            <ButtonContainer className="form-control mt-4" id="submit">
                                {this.state.buttonText}
                            </ButtonContainer>

                        </form>
                    </div>

                </div>

            </FormWrapper >
        )
    }
}
const FormWrapper = styled.div`
.contact-form{
margin : 1rem;
display: inline-block;
border-radius: 1rem;
padding: 1rem;
border: 1px solid var(--darkBeige);
}
    
.textarea {
    padding-left: 0.8rem;
    box-shadow: 1rem;
}
.textarea::placeholder {
    font-weight: 300;
}
.contact-form{
    position: inline-block;
    float: right;
}
`
