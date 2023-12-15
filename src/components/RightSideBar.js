import React, { useContext } from 'react'
import chatContext from '../Context/ChatContext'

const RightSideBar = () => {
  const { showContact, msg, setMessage, setShowContact } = useContext(chatContext)
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  const sendMessage = (id) => {
    setMessage("")
    const update = showContact.map((contact) => {
      if (contact.id === id) {
        return { ...contact, message: [...contact.message,msg] }
      }
      else {
        return contact
      }

    })
console.log(update,"update")
    setShowContact(update)

  }
  return (
    <div>
      <div className='container '>
        <div className='row d-flex align-items-center '>
          <div className='col-lg-2  d-flex align-items-start justify-content-start'>
            <img
              src={showContact[0]?.profilePic}
              className="rounded-circle me-1"
              alt="..."
              height={"25"}
              width={"25"}
            />
            <small>{showContact[0]?.name}</small>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 offset-lg-7'>
                <div className='d-flex align-items-end justify-content-end gap-4'>
                  <i className="fa-solid fa-phone ps-2" style={{ "color": "#1f5142" }}></i>
                  <i className="fa-solid fa-magnifying-glass ps-2"></i>
                  <i className="fa-solid fa-ellipsis-vertical ps-1"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container d-flex flex-column ' style={{ minHeight: 'calc(100vh - 46px)' }}>
        <div className='row flex-grow-1'>
          <div className='col-lg-9'>
            {/* Content goes here */}
            <div className=' '>
              {
                showContact[0]?.message.map((contact)=>{
                  return(
                    <div className='d-flex justify-content-end'>
  <div className='btn btn-secondary btn-large'>{contact}</div>
</div>


                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-9 mt-auto bg-success p-3'>
            <input type='text' className='form-control' value={msg} onChange={(e) => { handleChange(e, showContact[0]?.id) }} />

          </div>
          <div className='col-lg-3 bg-success p-3'>
            <button className='btn btn-primary btn-outline-danger' onClick={() => { sendMessage(showContact[0]?.id) }}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar