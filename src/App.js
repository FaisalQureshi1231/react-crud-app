import logo from './logo.svg';
import './App.css';
import Navbar from './components/partials/Navbar';
import Home from './components/main/Home';
import Users from './components/users/Users';
import { Route, Routes } from 'react-router-dom';
import Create from './components/users/Create';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home/>
    //   <Users/>
    // </div>
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element = {<Users />} />
        <Route path='create' element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
