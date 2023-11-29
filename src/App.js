import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DisplayTask from './components/displayTask';
import AddTask from './components/addTask';
import EditTask from './components/editTask';
import Navigation from './components/Navigation';
import Home from './components/about'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/about" element={<Home/>}/>
          <Route path="/displayTask" element={<DisplayTask/>} />
          <Route path="/" element={<AddTask/>} />
          <Route path="/editTask" element={<EditTask/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
