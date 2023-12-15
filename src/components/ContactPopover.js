import React, { useContext, useState } from 'react';
import data from "../data.json"
import chatContext from '../Context/ChatContext';
const ContactPopover = () => {
    const contacts = data.contacts
    const { setShowContact, showContact } = useContext(chatContext)

    const filterContact = (id) => {
        const findContact = showContact.find((cont) => {
            return cont.id === id
        })
        return findContact

    }
    return (
        <>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className='list-group'> {
                                contacts.map((contact) => {
                                    return (
                                        <li className='list-group-item bg-secondary-subtle border border-warning border-top-2' key={contact.id}>
                                            <div className='d-flex align-items-center '>
                                                <span className='d-flex  justify-content-start '>

                                                    <img src={contact.profilePic}
                                                        className="rounded-circle float-start me-1" alt="..." height={"25"} width={"30"} />



                                                    {contact.name}</span>
                                                <span className='d-flex justify-content-end ms-3 ms-auto'>
                                                    <button className='btn btn-sm btn-secondary' data-bs-dismiss="modal" onClick={() => {
                                                        if (!filterContact(contact.id)) {
                                                            setShowContact([contact, ...showContact])
                                                        }
                                                    }
                                                    }>send</button></span>
                                            </div>
                                        </li>

                                    )
                                })
                            }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPopover;
