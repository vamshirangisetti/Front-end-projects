import Navbar from './Components/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Change from './Pages/Change';
import {createContext, useState} from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Vamshi");
  return (  
    <div className="App">
    <AppContext.Provider value={{username, setUsername}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change" element={<Change />} />
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
