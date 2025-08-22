import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import User from './User';
import Navbar from './Navbar';

function App() {

  const Users = {
    Registerd : "rigistered",
    Public : 'public',
    Admin : 'admin'
  }

  const Current_user = Users.Admin;

  return (
    <BrowserRouter>
    <Navbar Current_user={Current_user} />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/admin' element={<Admin Current_user={Current_user} />}></Route>
      <Route path='/user' element={<User Current_user={Current_user} />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
