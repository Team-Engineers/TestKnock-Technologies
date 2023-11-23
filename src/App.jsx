import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TeamPage } from './Pages/TeamPage';
import { AboutPage } from './Pages/AboutPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;