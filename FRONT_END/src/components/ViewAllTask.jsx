import React from 'react' 
import { useEffect,useState } from 'react'
import { deleteTask, taskList } from './TaskApi'
import { Navigate, useNavigate } from 'react-router-dom'


const ViewAllTask = () => {
 
  
 
const [tasks, setTasks] = useState([])
const navigateTo = useNavigate()

  useEffect(() => {
   
    displayAllTAsks();
  }, []) 
  
  const displayAllTAsks=()=>{
    taskList().then((response)=>{
      setTasks(response.data) 
     }).catch((error)=>{
      console.log(error)
     })
  }
  const handleDeleteTask = (id)=>{
    console.log(id)

    deleteTask(id).then((response)=>{
      console.log(response.data)
      displayAllTAsks();
    }).catch((error)=>{
      console.log(error)
    })
  }
 
   
  


  return (
    <>
    <div className='col-lg-10 col-md-8  col-12 container '  style={{marginTop:'30px'}}>
    <h2 className='text-center fs-2'>TASKS TABLE</h2>
 
     
    <div style={{ display:'flex', gap:' 10px', justifyContent:'center', alignItems:'center', marginBottom:'10px'}} >
    <div  >
        <label >Filter by:</label>
        <select name="filters" style={{ borderRadius:'5px 5px 5px 5px'}} >
          <option>Select</option>
          <option>Status</option>
          <option>Priority</option>
          <option>Date</option>
        </select>
    </div>
      <input type='search' style={{outline:'none', borderRadius:'5px 5px 5px 5px'}} placeholder='Search task'/>
    </div>
    <div className='scrollable'>
    <table className="table table-striped table-bordered  " >
       <thead>
        <tr className="table-header text-center">
          <th  style={{color:'#0c3776'}}>Title</th>
          <th  style={{color:'#0c3776'}}>Description</th>
          <th  style={{color:'#0c3776'}}>Priority</th>
          <th  style={{color:'#0c3776'}}>Assigned to</th> 
          <th  style={{color:'#0c3776'}}>Status</th>
          <th  style={{color:'#0c3776'}}>Due</th>
          <th  style={{color:'#0c3776'}}>Actions</th>
          </tr>
       </thead>
        <tbody style={{height:'60px', overflowY:'auto'}}>
          { 
           tasks.map((task,id)=>
            
            <tr className='text-center' key={id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>{task.employees.map(employee=> '['+  employee.firstName+' ]')}</td>
               {
               task.status=='Not started'?<td style={{color:'red', fontWeight:'bold'}}>{task.status}</td>:
               task.status=='In progress'?<td style={{color:'yellow', fontWeight:'bold'}}>{task.status}</td>:
               <td style={{color:'green', fontWeight:'bold'}}>{task.status}</td>
              } 
              <td>{task.due}</td>
              <td><button className='btn btn-primary'style={{marginRight:'10px'}} onClick={()=>navigateTo(`/dashboard/${task.id}/edit`)} >Edit</button><button className='btn btn-danger' onClick={()=>handleDeleteTask(task.id)}>Delete</button></td>
            </tr>
        )

          } 
        </tbody>
        
        </table>
    </div>
      
      </div>
    </>
  )
}

export default ViewAllTask