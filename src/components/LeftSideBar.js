import React, { useContext, useState } from 'react'
import chatContext from '../Context/ChatContext'
import { toast } from 'react-toastify'
import ContactPopover from './ContactPopover'
import { useEffect } from 'react'
const LeftSideBar = () => {
    const { setLogin, login,  showContact, setShowContact } = useContext(chatContext)
    const [contacts, setContacts] = useState([])
    const[searchContact,setSearchContact]=useState('')
    const filterContact=()=>{
        const filter=showContact.filter((contact)=>{
            return contact.name.toLowerCase().includes(searchContact)
        })
        return filter
    }
    
    return (
        <div className=''>
            <div className='row mb-1'>
                <div className='col-lg-12 '>
                    <div className="input-group mt-2">
                        <span className="input-group-text">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input className="form-control me-2" type="search" placeholder="Search for conversation" 
                        aria-label="Search" value={searchContact} onChange={(e)=>setSearchContact(e.target.value)}/>
                        <div className='d-flex align-items-center'> <i class="fa-solid fa-arrow-right-from-bracket"
                            onClick={() => {
                                setLogin(!login)
                                toast.success('🦄 Logged Out!', {
                                    position: "top-right",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                })
                                localStorage.removeItem("login")
                            }}></i></div>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-lg-8 d-flex justify-content-start align-items-start offset-lg-1">
                    <h6 className="ps-1 secondary">Conversation</h6>

                </div>
                <div className="col-lg-3 d-flex justify-content-end align-items-start">

                    <i class="fa-solid fa-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    ></i>

                    <ContactPopover />
                </div>

            </div>
                        <div className='row'>
                            <div className='col-lg-12 bg-light'>
                            <ul className='list-group '>
                            {
                                filterContact().map((contact)=>{
                                    return(
                                        <li className='list-group-item p-3 d-flex align-items-start' key={contact.id}>
                                        <div>
                                        <img src={contact.profilePic}
                                                        className="rounded-circle float-start me-1" alt="..." height={"25"} width={"30"} />

                                          <p style={{ display: 'inline-block', marginBottom:'-4px' }}>{contact.name}</p>
                                          
                                          <small style={{display:'block'}}>
                                            {contact.message[contact.message.length-1]}
                                          </small>
                                        </div>
                                      </li>
                                    )
                                })
                            }
                            </ul>
                            </div>
                        </div>
        </div>
    )
}

export default LeftSideBar