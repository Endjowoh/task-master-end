import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import CreateNewAccount from './components/CreateNewAccount';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UpdatePage from './components/UpdatePage';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/registration' element={<CreateNewAccount/>}/> 
            <Route path='/dashboard/:id/edit' element={<UpdatePage/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>

          
            
                
     
        </Routes>
      </BrowserRouter>
        
    
     
    </>
  )
}

export default App
