import React, { useState } from 'react'
import chatContext from './Context/ChatContext'

const MyChatProvider = ({children}) => {
    const[login,setLogin]=useState(false)
    const[pop,setPop]=useState(false)
    const[msg,setMessage]=useState("")
    const[showContact,setShowContact]=useState([])
  return (
    <chatContext.Provider value={{login,setLogin,pop,setPop ,showContact,setShowContact,msg,setMessage}}>
        {children}
    </chatContext.Provider>
  )
}

export default MyChatProvider