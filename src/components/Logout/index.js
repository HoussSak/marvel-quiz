import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from '../Firebase/firebaseConfig';
import ReactTooltip  from 'react-tooltip';

const Logout = () => {
  const [checked,setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    if(checked) {
      signOut(auth).then(()=> {
        console.log("déconnexion")
        setTimeout(()=> {
          navigate('/')
        },1000)
      }).catch((error)=> {
        console.log("erreur")
      })
      
    }
  },[checked])

  const handleChange=e=> {
      setChecked(e.target.checked)
  }
  return (
    <div className='logoutContainer'>
      <label className='switch'>
        <input 
            onChange={handleChange}
            type="checkbox" 
            checked={checked}
            />
        <span className='slider round' data-tip='Déconnexion'></span>
      </label> 
       <ReactTooltip
             place='left' 
             effect='solid'/>
    </div>
  )
}

export default Logout
