import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { getJwtToken } from './TaskApi';

const Login = () => {


    const navigateTo = useNavigate();
    const [errMsg, setErrMsg] = useState('')

    const [username, setUsername]=useState('') 
    const handleUsernameChange = (e)=>{ setUsername(e.target.value)  }
    const [password, setPassword]=useState('')
    const handlePasswordChange = (e)=>{ setPassword(e.target.value) } 

    const user ={username,password} 

        const handleSubmit = (e)=>{
            e.preventDefault(user); 
            getJwtToken(user).then((response)=>{
                console.log(response.data)
                localStorage.setItem('token',response.data)
                setErrMsg('')
                navigateTo('/dashboard')
            }).catch((error)=>{
                console.log(error)
                setErrMsg('User Not Found!')
            })
             
                  
        }
       


  return (
    <>
   <div className='container'    style={{marginTop:'70px'}} >
        <h2 className='text-center fs-2 d-flex justify-content-center flex-wrap'>WELCOME TO TASKMASTER LOGIN PAGE</h2>
        <div  className='container col-lg-6 col-md-10 col-sm-10 col-12 d-flex justify-content-center align-items-centers'   style={{minWidth:'300px'}}  >
           
            <form method='POST' onSubmit={handleSubmit} style={{backgroundColor:'#0d6efd',color:'#fff', width:'100%', border:'1px solid white', borderRadius:'5px 5px 5px 5px', padding:'10px'  }} >
                <div className='form-group mb-3'  >
                    <label>User Name </label>
                    <input required className='form-control'  type='text'  name='firstName'  value={username} onChange={handleUsernameChange} />
                </div> 
                <div className='form-group mb-3'>
                    <label>Password</label>
                    <input required  className='form-control' type='password' name='password' value={password} onChange={handlePasswordChange} />
                </div> 
                <button style={{width:'100%',backgroundColor:'#0c3776', color:'#fff'}} className='btn mt-3' type='submit' >Submit</button>
                <div className='text-center' ><span  style={{color:'red', fontWeight:'bold'}}>{errMsg}</span></div>
               
            </form>
            
        </div>
        <div className='text-center mt-3'>
            <span className='registration-link' onClick={()=>navigateTo("/registration")} style={{textDecoration:'underline'}}>Not registered? Create an account</span>
        </div>
        
    </div>

    </>
  )
}

export default Login