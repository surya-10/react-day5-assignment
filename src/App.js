import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { useEffect, useState } from 'react';
import Dashboard from './components/dashboard';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/adduser';
import EditUser from './components/edituser';

function App() {
  let [user, setUser] = useState([]);
  useEffect(()=>{
    async function getData(){
      let data = await fetch("https://6427aa39161067a83bfedd4f.mockapi.io/users",{
      method:"GET"
    }
      );
      let returnData = await data.json();
      console.log(returnData);
      setUser(returnData);
    }
    getData()
  }, [])
  console.log(user)
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path='/users' element={<Home
        user={user}
        setUser={setUser}/>}/>
        <Route path='/add-user' element={<AddUser
        user={user}
        setUser={setUser}/>}/>
        <Route path='edit-user/:id' element={<EditUser
        user={user}
        setUser={setUser}/>}/>
      </Routes>
      {/* <Home
      user={user}
      setUser={setUser}/> */}
    </div>
  );
}

export default App;
