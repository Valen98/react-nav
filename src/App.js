import React from 'react'
import Routing from "./Routes/Routing"
import UserProvider from "./Shared/Global/Provider/UserProvider"
import './Shared/Global/Css/Styles.css'
import { Navbar } from './Component/Navbar/Navbar'
function App() {
  return (
    
    <UserProvider>
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
    </UserProvider>

  );
}

export default App;
