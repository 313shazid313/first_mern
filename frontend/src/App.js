import React from "react";
import MainPage from './MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create'
import Update from "./Update";
import Read from "./components/Read";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>       
        
          <MainPage></MainPage>
          <Routes>            
            <Route path="/" element={<Create/>}/>
            <Route path="/read" element={<Read/>} />
            <Route path="/:id" element={<Update/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
