import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Create from './pages/create'
import Edit from './pages/edit'
import View from './pages/view'

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <h4 className='text-white ms-4'>Reactjs Final Project</h4>
        <div className='navbar-nav ms-auto me-5'>
          <li className='nav-item'>
            <Link to={"/"} className="nav-link text-white">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/create"} className="nav-link text-white">Create</Link>
          </li>

        </div>
      </nav>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
