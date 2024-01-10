import React from 'react'
import './profile.css'
import {useNavigate} from 'react-router-dom'
function Profile({setUser}) {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        setUser(null);
        navigate("/sign");
    }
  return (
    <div className='profile'>
        <div className='logout' onClick={handleLogout}>LogOut</div>
        <div className="profileData">
            User Profile ....

        </div>
    </div>
  )
}

export default Profile