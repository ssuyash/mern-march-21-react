import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            number: "",
            contacts: []
        }
    }

    deleteContact = (contactId)=>{
        let contacts = [...this.state.contacts]
        contacts = contacts.filter(contact => contact.contactId != contactId)
        this.setState({contacts})
        alert(contactId)
    }

    saveContact = () => {
        let { name, number, contacts } = this.state

        let newContact = { name, number, contactId:uuidv4() }

        contacts.push(newContact)
        this.setState({ contacts, name: "", number: "" })
    }


    render() {
        // this.state.contacts.map(contact => {
        //     return (<li>
        //         {contact.contactId} - {contact.name} - {contact.number}  
        //         &nbsp;&nbsp;
        //         <button onClick={()=>this.deleteContact(contact.contactId)}>delete</button>
        //         </li>)
        // })
        
        let contactUi = []
        this.state.contacts.forEach(contact => {
            contactUi.push(<li>
                {contact.contactId} - {contact.name} - {contact.number}  
                &nbsp;&nbsp;
                <button onClick={()=>this.deleteContact(contact.contactId)}>delete</button>
                </li>)
        })

        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />

                <input
                    type="text"
                    value={this.state.number}
                    onChange={(e) => this.setState({ number: e.target.value })}
                />

                <button onClick={this.saveContact}>Save</button>

                <ul>
                    {contactUi}
                </ul>



            </div>
        )
    }
}


