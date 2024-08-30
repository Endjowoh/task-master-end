import React from 'react'
import { useState,useEffect } from 'react'
import {  getTask, updateTask, usersList } from './TaskApi'
import { useParams,Navigate, useNavigate } from 'react-router-dom'

const UpdatePage = () => {


    const {id} = useParams();
    const navigateTo = useNavigate();

    const [title, setTitle]=useState('')
    const handleTitleChange = (e)=>{ setTitle(e.target.value) ;   }
    const [description, setDescription]=useState('') 
    const handleDescriptionChange = (e)=>{ setDescription(e.target.value);   }
    const [priority, setPriority]=useState('Medium')
    const handlePriorityChange = (e)=>{  
            setPriority(e.target.value)   
        }
    const [status, setStatus]=useState('Not started')
    const handleStatusChange = (e)=>{  
            setStatus(e.target.value)   
        }
    const [due, setDue]=useState('')
    const handleDueChange = (e)=>{ setDue(e.target.value); }

    const [userList, setUserList] = useState([])
  

    let assignees = []
    
    
    const [assignee1, setAssignee1]=useState('')
    const [assignee2, setAssignee2]=useState('')
    const [assignee3, setAssignee3]=useState('')
    const [assignee4, setAssignee4]=useState('')
   
   
   
    
    if(assignee1!='' ){
        assignees.push(assignee1)  
    }
    if(assignee2!='' ){
        assignees.push(assignee2)  
    }
    if(assignee3!='' ){
        assignees.push(assignee3)   
    }
    if(assignee4!='' ){
        assignees.push(assignee4)  
    }

   
    let taskAssigneesList = []
    let updatedTask = {}
    if(assignees.length==0){
         
        updatedTask = {
            title,description,priority,status,due
           }
     }else{
       
             
            newTask = {
               title,description,priority,status,due
              }
       }
        
     
    
    
    

 
   const handleSubmit = (e)=>{
    e.preventDefault(); 
    updateTask (id, updatedTask).then((response)=>{ 
    }).catch((error)=>{
        console.log(error)
    })

    navigateTo('/dashboard')
          
}
   
    const [taskAssignees, setTaskAssignees] = useState([])
    useEffect(() => {
        getTask(id).then((response)=>{ 


            setTitle(response.data.title);
            setDescription(response.data.description);
            setPriority(response.data.priority);
            setStatus(response.data.status);
            setDue(response.data.due);
            setTaskAssignees(response.data.employees)

            setAssignee1('');
            setAssignee2('');
            setAssignee3('');
            setAssignee4('');
        }).catch((error)=>{
            console.log(error)
        })
       
       usersList().then((response)=>{
        
        setUserList(response.data)
        

       }).catch((error)=>{
        console.log(error)
       })
    }, [])
    const assigneesNames =taskAssignees.map((assignee)=>{
        taskAssigneesList.push(assignee.firstName)
        return '['+assignee.firstName+']'
    }) 

   
   
  return (
    <>
         <div className=' col-lg-8 col-md-8 col-sm-8  container' style={{marginTop:'30px'}} >
        <h2 className='text-center fs-2'>UPDATE THIS TASK</h2>
        <div >
           
            <form method='POST' onSubmit={handleSubmit} style={{   border:'1px solid grey', borderRadius:'5px 5px 5px 5px', padding:'10px' }} >
                <div className='form-group mb-3'  >
                    <label>Title:</label>
                    <input required className='form-control'  type='text' value={title}   name='title' onChange={handleTitleChange} />
                </div>
                <div className='form-group mb-3'>
                    <label>Description:</label>
                    <input required className='form-control' type='text' value={description} name='description' onChange={handleDescriptionChange} />
                </div>
                <div className='form-group mb-3'>
                    <label >Priority:</label>
                    <select  style={{marginLeft:'10px'}} value={priority}  name="priority" onChange={handlePriorityChange} required>
                         <option>Medium</option>
                        <option>Urgent</option>
                        <option>Very urgent</option>
                    </select>
                </div>
                <div className='form-group mb-3'>
                    <label >Status:</label>
                    <select required style={{marginLeft:'10px'}} value={status}  name="status" onChange={handleStatusChange}>
                        <option>Not started</option>
                        <option>In progress</option>
                        <option>Complete</option>
                    </select>
                </div>
                <div className='form-group mb-3'>
                    <label>Due date:</label>
                    <input required className='form-control' type='date' value={due}  name='due' onChange={handleDueChange} />
                </div>
                <div className='form-group mb-3'>
                    <label>Assigned to:</label> 
                    <input  className='form-control' type='text' value={assigneesNames} name='assignees' disabled  />
                </div>
                
                <button  style={{width:'100%'}} className='btn btn-primary ' type='submit' >Submit</button>
                 
               
            </form>
        </div>
    </div>
    </>
  )
}

export default UpdatePage