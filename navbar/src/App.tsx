import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import GridTest from './components/GridTest/GridTest';
import GridBootTest from './components/GridTest/GridBootTest';
import Content from './components/Content/Content';

function App() {
  const [selectedLink, setSelectedLink] = useState('');
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content selectedLink={selectedLink}></Content>
    </div>
  );
}

export default App;
