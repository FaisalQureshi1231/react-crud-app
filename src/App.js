import logo from './logo.svg';
import './App.css';
import Navbar from './components/partials/Navbar';
import Home from './components/main/Home';
import Users from './components/users/Users';
import { Route, Routes } from 'react-router-dom';
import Create from './components/users/Create';
import Update from './components/users/Update';
import Login from './components/auth/Login';
import { AuthProvider } from './components/auth/Auth';
import RequireAuth from './components/auth/RequireAuth';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home/>
    //   <Users/>
    // </div>
    <>
     <AuthProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element = {<Users />} />
          <Route path='create' element={<RequireAuth><Create /></RequireAuth>} />
          <Route path='update/:id' element={<RequireAuth><Update /></RequireAuth>} />
          <Route path='login' element ={<Login />} />
        </Routes>
     </AuthProvider>
    </>
  );
}

export default App;
