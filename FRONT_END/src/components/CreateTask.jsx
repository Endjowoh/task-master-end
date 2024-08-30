import React from 'react'
import { useState,useEffect } from 'react'
import { createTask, taskList, usersList } from './TaskApi'

const CreateTask = () => {

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
   
   
    const handleAssignee1Change = (e)=>{  
            if(e.target.value!='select')
                setAssignee1(e.target.value);  
             
        }
    const handleAssignee2Change = (e)=>{  
        if(e.target.value!='select')
            setAssignee2(e.target.value);  
    }
    const handleAssignee3Change = (e)=>{  
        if(e.target.value!='select')
            setAssignee3(e.target.value);  
    }
    const handleAssignee4Change = (e)=>{  
        if(e.target.value!='select')
            setAssignee4(e.target.value);  
    }

    
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

    let employees = []
   
    let newTask = {}
    if(assignees.length==0){
        employees.push({firstName:"none"})
        newTask = {
            title,description,priority,status,due,employees
           }
     }else{
        for(let i=0;i<assignees.length;i++){ 
            employees.push({firstName:assignees[i]})
            newTask = {
               title,description,priority,status,due,employees
              }
       }
        
     
     }
    
    

 
   const handleSubmit = (e)=>{
    e.preventDefault(); 
    createTask(newTask).then((response)=>{
     
    }).catch((error)=>{
        console.log(error)
    })

    setTitle('');
    setDescription('');
    setPriority('');
    setStatus('');
    setDue('');
    setAssignee1('');
    setAssignee2('');
    setAssignee3('');
    setAssignee4('');
          
}
   
    useEffect(() => {
       usersList().then((response)=>{
        
        setUserList(response.data)
        

       }).catch((error)=>{
        console.log(error)
       })
    }, [])
    
  

   
   

  
       
   
  
   
     

  return (
    <>
         <div className=' col-lg-8 col-md-8 col-sm-8  container' style={{marginTop:'30px'}} >
        <h2 className='text-center fs-2'>CREATE NEW TASK</h2>
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
                    <select  style={{marginLeft:'10px'}} value={assignee1}  name="assignee1" onChange={handleAssignee1Change}>
                       <option>Select</option>
                        { userList.map((user,id)=>{
                            return <option value={user.username} key={id}>{user.username}</option>
                        })
                        }
                    </select> 
                    <select  style={{marginLeft:'10px'}} value={assignee2}  name="assignee2" onChange={handleAssignee2Change}>
                        <option value="Select">Select</option>
                        { userList.map((user,id)=>{
                            return <option value={user.username} key={id}>{user.username}</option>
                        })
                        }
                    </select> 
                    <select style={{marginLeft:'10px'}} value={assignee3}  name="assignee3" onChange={handleAssignee3Change}>
                        <option value="Select">Select</option>
                        { userList.map((user,id)=>{
                            return <option value={user.username} key={id}>{user.username}</option>
                        })
                        }
                    </select> 
                    <select style={{marginLeft:'10px'}} value={assignee4}  name="assignee4" onChange={handleAssignee4Change}>
                        <option value="Select">Select</option>
                        { userList.map((user,id)=>{
                            return <option value={user.username} key={id}>{user.username}</option>
                        })
                        }
                    </select>  
                    
                
                    <input  className='form-control' type='text' value={assignees} name='assignees' disabled  />
                </div>
                
                <button  style={{width:'100%'}} className='btn btn-primary ' type='submit' >Submit</button>
                 
               
            </form>
        </div>
    </div>
    </>
  )
}

export default CreateTask