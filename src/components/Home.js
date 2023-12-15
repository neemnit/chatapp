import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const Home = () => {
  
  return (
  
    <div
    className='container-fluid'>
        <div className='row bg-secondary-subtle'>
            <div className='col-lg-3 border border-secondary border-end-0 border-bottom-0'>
                <LeftSideBar/>
            </div>
            <div className='col-lg-9 border border-secondary bg-light '>
                <RightSideBar/>
            </div>
        </div>
    </div>
    
  )
}

export default Home