import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateTask from './CreateTask'
import ViewAllTask from './ViewAllTask'
import { jwtDecode } from 'jwt-decode'


const Dashboard = () => {
 
    const navigateTo = useNavigate();
    const [active, setActive] = useState('active')
    const [username, setUsername] = useState('')

    const handleDisplayAllTaskTable = ()=>{
        setActive('')
    }

    const handleDisplayCreateTaskForm = ()=>{
        setActive('active')
    }

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigateTo('/login');
    }


    useEffect(() => {
     
        const token =localStorage.getItem('token');
    
        if(token){
          const decodedToken = jwtDecode(token);
            const usernameFromTokem = decodedToken.sub;
            setUsername(usernameFromTokem)
             
        }
    
    
      }, [])

    const displayIfActive = active? <CreateTask/>:<ViewAllTask/>
    
  return (
    <>
    
    <div className='d-flex ' style={{position:'relative', height:'auto', minHeight:'100vh'}}  >

    <div className='col-2' style={{ backgroundColor:'#0c3776', color:'#fff', width:'140px', padding:'5px'}}>
        <ul style={{listStyle:'none'}}>
            <li className='text-center' style={{backgroundColor:'white', color:'green', fontWeight:'bold', borderRadius:'5px 5px 5px 5px', padding:'5px'}}>-Hi {`${username}`}-</li> 
            <li>
                <button style={{width:'100%', marginTop:'50px'}} className='btn btn-primary' onClick={handleDisplayCreateTaskForm}>
                    <span style={{fontSize:'20px',margin:'0px',padding:'0px'}}>+ </span>
                     Create task
                </button>
            </li>
            <li>
                <button style={{width:'100%', marginTop:'30px', padding:'8px'}} className='btn btn-primary'onClick={handleDisplayAllTaskTable} >
                 View all tasks
                </button>
            </li> 
            <li>
                <button style={{width:'100%', marginTop:'30px', padding:'8px'}} className='btn btn-primary'onClick={handleDisplayAllTaskTable} >
                 Notifications
                </button>
            </li> 
            
        </ul>
        <div className='d-flex justify-content-center align-items-center ' >
            <button className='btn btn-danger'  style={{position:'absolute', top:'45px'}} onClick={handleLogout}>Logout</button>
  
        </div>
     </div>

       
        {displayIfActive}
   
</div>
    
    </>
  )
}

export default Dashboard