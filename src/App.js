import React, { useEffect } from 'react';
import './App.css';
import Login from "./Components/login"
import { getTokenFromUrl } from './spotify';



function App() {
  useEffect(() => {
    const token = getTokenFromUrl()
    window.location.hash = " "
    console.log("i have a token", token)
  }, [])

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
