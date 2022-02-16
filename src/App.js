import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import styled from 'styled-components';
import SubNav from './components/SubNav';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <SubNav />
        <AppBody>
        <Sidebar />
      <Routes>    
          <Route exact path="/" element={<ChatSection />}>
          </Route>
        </Routes>
        </AppBody>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
