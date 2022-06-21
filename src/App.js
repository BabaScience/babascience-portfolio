import './App.scss';

import { Routes, Route } from 'react-router-dom'

/*  Pages  */
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ContactMePage from './pages/ContactMePage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/projects' element={<ProjectPage/>} />
      <Route path='/contact' element={<ContactMePage/>} />
    </Routes>
  );
}

export default App;
