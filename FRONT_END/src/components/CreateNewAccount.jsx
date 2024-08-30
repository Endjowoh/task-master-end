import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'; 
import { createUser } from './TaskApi';

const CreateNewAccount = () => {

    const navigateTo = useNavigate();
 
    const [username, setUsername]=useState('') 
    const handleUsernameChange = (e)=>{ setUsername(e.target.value)  }
    const [email, setEmail]=useState('')
    const handleEmailChange = (e)=>{ setEmail(e.target.value) }
    const [password, setPassword]=useState('')
    const handlePasswordChange = (e)=>{ setPassword(e.target.value) }
    const [role, setRole]=useState('User') 
    const handleRoleChange = (e)=>{ 
         
            setRole(e.target.value)  
        }
   
    const employee ={username,email,password,role}
    const handleSubmit = (e)=>{
            e.preventDefault(); 
            createUser(employee).then((response)=>{
                 

            }).catch((error)=>{
                console.log(error)
            })
            
           navigateTo('/login')

        }
       


  return (
    <>
    <div  className='container'  style={{marginTop:'70px' }} >
        <h2 className='text-center fs-2'>REGISTRATION FORM</h2>
        <div  className='container col-lg-6 col-md-10 col-sm-10 col-12 d-flex justify-content-center align-items-center  '     >
           
            <form method='POST' onSubmit={handleSubmit}  style={{backgroundColor:'#0d6efd',color:'#fff', width:'100%', border:'1px solid white', borderRadius:'5px 5px 5px 5px', padding:'10px' }} >
                 
                <div className='form-group mb-3'>
                    <label>User Name</label>
                    <input required className='form-control' type='text'  name='lastName' value={username} onChange={handleUsernameChange} />
                </div>
                <div className='form-group mb-3'>
                    <label>Email</label>
                    <input required className='form-control' type='text' name='email' value={email} onChange={handleEmailChange}/>
                </div>
                <div className='form-group mb-3'>
                    <label>Password</label>
                    <input required className='form-control' type='password'  name='password' value={password} onChange={handlePasswordChange}/>
                </div>
                <div className='form-group mb-3'>
                    <label >Role:</label>
                    <select style={{marginLeft:'10px'}} name="role" value={role} onChange={handleRoleChange}>
                        <option>Admin</option>
                        <option>Manager</option>
                        <option>User</option>
                    </select>
                </div>
                <button  style={{width:'100%', backgroundColor:'#0c3776', color:'#fff'}} className='btn mt-3' type='submit' >Submit</button>
                 
               
            </form>
        </div>
        <div className='text-center'>
            <span className='registration-link' onClick={()=>navigateTo("/login")} style={{textDecoration:'underline'}}>Already registered? Login</span>
        </div>
    </div>
        
    </>
  )
}

export default CreateNewAccount