import React from 'react'
import Routes from "./Components/Router";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <div>
      <h2>Welcome to CAUSTIC!!!</h2>
      <Navigation/>
      <Routes/>
    </div>
  )
};


export default App;