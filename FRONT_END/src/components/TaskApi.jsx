import axios from 'axios';

export const API_BASE_URL = "http://localhost:8080/api/task";
export const API_BASE_URL2 = "http://localhost:8080/api/user"
export const API_BASE_URL_REGISTRATION = "http://localhost:8080/api/registered-employee";

export const taskList = ()=>{
    return axios.get(API_BASE_URL);
}

export const usersList = ()=>{
    return axios.get(API_BASE_URL2);
}


export const createTask = (task)=>{
    return axios.post(API_BASE_URL,task)
}

export const deleteTask = (taskId)=>{
    return axios.delete(API_BASE_URL+'/'+taskId)
}

export const updateTask = (taskId, task)=>{
    return axios.put(API_BASE_URL+'/'+taskId, task)
}

export const getTask = (taskId)=>{
    return axios.get(API_BASE_URL+'/'+taskId)
}
export const createUser = (employee)=>{
    return axios.post(API_BASE_URL2+"/register",employee)
}

export const getJwtToken = (employee)=>{
    return axios.post(API_BASE_URL2+"/login",employee)
}